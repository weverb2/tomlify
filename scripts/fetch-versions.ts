import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../src/data/libraries';

const GOOGLE_MAVEN = 'https://dl.google.com/dl/android/maven2';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

const PRE_RELEASE_KEYWORDS = ['alpha', 'beta', 'rc', 'dev', 'm', 'snapshot', 'preview', 'candidate'];

function isStable(version: string): boolean {
  const v = version.toLowerCase();
  return !PRE_RELEASE_KEYWORDS.some(k => v.includes('-' + k) || v.includes('.' + k) || v.includes(k + '0') || v.includes(k + '.'));
}

async function fetchMetadata(group: string, artifact: string): Promise<{ stable: string, latest: string } | null> {
  const groupPath = group.replace(/\./g, '/');
  const urls = [
    `${MAVEN_CENTRAL}/${groupPath}/${artifact}/maven-metadata.xml`,
    `${GOOGLE_MAVEN}/${groupPath}/${artifact}/maven-metadata.xml`
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) continue;
      
      const xml = await response.text();
      const result = await parseStringPromise(xml);
      const versioning = result.metadata.versioning[0];
      const allVersions: string[] = versioning.versions[0].version;
      
      const latest = versioning.latest?.[0] || allVersions[allVersions.length - 1];
      let stable = [...allVersions].reverse().find(isStable);
      if (!stable) stable = latest;

      return { stable, latest };
    } catch (e) {
      continue;
    }
  }
  return null;
}

async function updateVersions() {
  console.log('Fetching latest and stable versions...');
  
  const updatedLibs = await Promise.all(LIBRARIES.map(async (lib) => {
    if (lib.artifact === '') return lib;
    const meta = await fetchMetadata(lib.group, lib.artifact);
    if (!meta) return lib;
    return { ...lib, stableVersion: meta.stable, latestVersion: meta.latest };
  }));

  const updatedPlugins = await Promise.all(PLUGINS.map(async (p) => {
    let group = p.group || p.pluginId;
    let artifact = p.artifact || `${p.pluginId}.gradle.plugin`;

    // Special cases for AGP and Spotless
    if (p.id === 'android-application') {
      group = 'com.android.tools.build';
      artifact = 'gradle';
    }

    const meta = await fetchMetadata(group, artifact);
    if (meta) {
      return { ...p, stableVersion: meta.stable, latestVersion: meta.latest };
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
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'DI' | 'Data' | 'KMP' | 'Core';
  kmpPlatforms?: string[];
}

export interface Plugin {
  id: string;
  name: string;
  pluginId: string;
  group?: string;
  artifact?: string;
  stableVersion: string;
  latestVersion: string;
  description: string;
  category: 'Compiler Plugin' | 'KSP Processor' | 'Build Tool';
}

export const LIBRARIES: Library[] = ${JSON.stringify(updatedLibs, null, 2)};

export const PLUGINS: Plugin[] = ${JSON.stringify(updatedPlugins, null, 2)};
`;

  fs.writeFileSync(filePath, content);
  console.log('Successfully updated src/data/libraries.ts');
}

updateVersions();
