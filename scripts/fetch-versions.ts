import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';
import { LIBRARIES, type Library } from '../src/data/libraries';

const GOOGLE_MAVEN = 'https://dl.google.com/dl/android/maven2';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

async function fetchLatestVersion(lib: Library): Promise<string> {
  const groupPath = lib.group.replace(/\./g, '/');
  const url = lib.group.startsWith('androidx') || lib.group.startsWith('com.google') || lib.group.startsWith('com.android')
    ? `${GOOGLE_MAVEN}/${groupPath}/${lib.artifact}/maven-metadata.xml`
    : `${MAVEN_CENTRAL}/${groupPath}/${lib.artifact}/maven-metadata.xml`;

  try {
    const response = await fetch(url);
    if (!response.ok) return lib.version;
    
    const xml = await response.text();
    const result = await parseStringPromise(xml);
    return result.metadata.versioning[0].release?.[0] || result.metadata.versioning[0].latest?.[0] || lib.version;
  } catch (e) {
    console.error(`Failed to fetch version for ${lib.id}:`, e);
    return lib.version;
  }
}

async function updateVersions() {
  console.log('Fetching latest versions...');
  const updatedLibraries = await Promise.all(
    LIBRARIES.map(async (lib) => {
      // Don't fetch if version is explicitly empty (managed by BOM)
      if (lib.version === '' && lib.id !== 'compose-bom') return lib;
      
      const latest = await fetchLatestVersion(lib);
      console.log(`- ${lib.name}: ${latest}`);
      return { ...lib, version: latest };
    })
  );

  const filePath = path.join(process.cwd(), 'src/data/libraries.ts');
  const content = `export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  version: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities';
}

export const LIBRARIES: Library[] = ${JSON.stringify(updatedLibraries, null, 2)};
`;

  fs.writeFileSync(filePath, content);
  console.log('Successfully updated src/data/libraries.ts');
}

updateVersions();
