import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../src/data/libraries';

const GOOGLE_MAVEN = 'https://dl.google.com/dl/android/maven2';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

async function fetchLatestVersion(group: string, artifact: string, currentVersion: string): Promise<string> {
  const groupPath = group.replace(/\./g, '/');
  const url = group.startsWith('androidx') || group.startsWith('com.google') || group.startsWith('com.android')
    ? `${GOOGLE_MAVEN}/${groupPath}/${artifact}/maven-metadata.xml`
    : `${MAVEN_CENTRAL}/${groupPath}/${artifact}/maven-metadata.xml`;

  try {
    const response = await fetch(url);
    if (!response.ok) return currentVersion;
    
    const xml = await response.text();
    const result = await parseStringPromise(xml);
    return result.metadata.versioning[0].release?.[0] || result.metadata.versioning[0].latest?.[0] || currentVersion;
  } catch (e) {
    return currentVersion;
  }
}

async function updateVersions() {
  console.log('Fetching latest versions...');
  
  const updatedLibs = await Promise.all(LIBRARIES.map(async (lib) => {
    if (lib.version === '' && lib.id !== 'compose-bom') return lib;
    const latest = await fetchLatestVersion(lib.group, lib.artifact, lib.version);
    return { ...lib, version: latest };
  }));

  const updatedPlugins = await Promise.all(PLUGINS.map(async (p) => {
    // Attempt to fetch version if we can map the plugin to a maven group/artifact
    let group = '', artifact = '';
    if (p.pluginId.startsWith('org.jetbrains.kotlin')) {
      group = 'org.jetbrains.kotlin';
      artifact = 'kotlin-stdlib';
    } else if (p.pluginId.startsWith('androidx')) {
      group = p.pluginId;
      artifact = p.id;
    } else if (p.id === 'sqldelight-runtime') {
       group = 'app.cash.sqldelight';
       artifact = 'runtime';
    }

    if (group && artifact) {
      const latest = await fetchLatestVersion(group, artifact, p.version);
      return { ...p, version: latest };
    }
    return p;
  }));

  const filePath = path.join(process.cwd(), 'src/data/libraries.ts');
  const content = `export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  version: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'DI' | 'Data' | 'KMP';
  kmpPlatforms?: string[];
}

export interface Plugin {
  id: string;
  name: string;
  pluginId: string;
  version: string;
  description: string;
  category: 'Compiler Plugin' | 'KSP Processor';
}

export const LIBRARIES: Library[] = ${JSON.stringify(updatedLibs, null, 2)};

export const PLUGINS: Plugin[] = ${JSON.stringify(updatedPlugins, null, 2)};
`;

  fs.writeFileSync(filePath, content);
  console.log('Successfully updated src/data/libraries.ts');
}

updateVersions();
