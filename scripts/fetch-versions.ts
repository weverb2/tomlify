import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../src/data/libraries';

const GOOGLE_MAVEN = 'https://dl.google.com/dl/android/maven2';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

async function fetchMetadata(group: string, artifact: string): Promise<{ stable: string, latest: string } | null> {
  const groupPath = group.replace(/\./g, '/');
  const url = group.startsWith('androidx') || group.startsWith('com.google') || group.startsWith('com.android')
    ? `${GOOGLE_MAVEN}/${groupPath}/${artifact}/maven-metadata.xml`
    : `${MAVEN_CENTRAL}/${groupPath}/${artifact}/maven-metadata.xml`;

  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    
    const xml = await response.text();
    const result = await parseStringPromise(xml);
    const versioning = result.metadata.versioning[0];
    
    return {
      stable: versioning.release?.[0] || versioning.latest?.[0],
      latest: versioning.latest?.[0] || versioning.release?.[0]
    };
  } catch (e) {
    return null;
  }
}

async function updateVersions() {
  console.log('Fetching latest and stable versions...');
  
  const updatedLibs = await Promise.all(LIBRARIES.map(async (lib) => {
    if (lib.stableVersion === '' && lib.id !== 'compose-bom') return lib;
    const meta = await fetchMetadata(lib.group, lib.artifact);
    if (!meta) return lib;
    console.log(`- ${lib.name}: Stable: ${meta.stable}, Latest: ${meta.latest}`);
    return { ...lib, stableVersion: meta.stable, latestVersion: meta.latest };
  }));

  const updatedPlugins = await Promise.all(PLUGINS.map(async (p) => {
    let group = '', artifact = '';
    if (p.pluginId.startsWith('org.jetbrains.kotlin')) {
      group = 'org.jetbrains.kotlin';
      artifact = 'kotlin-stdlib';
    } else if (p.pluginId.startsWith('androidx')) {
      group = p.pluginId;
      artifact = p.id;
    }

    if (group && artifact) {
      const meta = await fetchMetadata(group, artifact);
      if (meta) return { ...p, stableVersion: meta.stable, latestVersion: meta.latest };
    }
    return p;
  }));

  const filePath = path.join(process.cwd(), 'src/data/libraries.ts');
  const content = `export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  stableVersion: string;
  latestVersion: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'DI' | 'Data' | 'KMP';
  kmpPlatforms?: string[];
}

export interface Plugin {
  id: string;
  name: string;
  pluginId: string;
  stableVersion: string;
  latestVersion: string;
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
