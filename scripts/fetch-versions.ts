import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../src/data/libraries';

const GOOGLE_MAVEN = 'https://dl.google.com/dl/android/maven2';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

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
      
      let stable = versioning.release?.[0];
      if (!stable) {
        const allVersions = versioning.versions[0].version;
        stable = [...allVersions].reverse().find((v: string) => 
          !v.toLowerCase().includes('alpha') && 
          !v.toLowerCase().includes('beta') && 
          !v.toLowerCase().includes('rc') && 
          !v.toLowerCase().includes('m')
        ) || allVersions[allVersions.length - 1];
      }

      return {
        stable: stable,
        latest: versioning.latest?.[0] || stable
      };
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
    // Determine coordinates: Explicitly defined OR Marker pattern (pluginId:pluginId.gradle.plugin)
    const group = p.group || p.pluginId;
    const artifact = p.artifact || `${p.pluginId}.gradle.plugin`;

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
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'DI' | 'Data' | 'KMP';
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
  category: 'Compiler Plugin' | 'KSP Processor';
}

export const LIBRARIES: Library[] = ${JSON.stringify(updatedLibs, null, 2)};

export const PLUGINS: Plugin[] = ${JSON.stringify(updatedPlugins, null, 2)};
`;

  fs.writeFileSync(filePath, content);
  console.log('Successfully updated src/data/libraries.ts');
}

updateVersions();
