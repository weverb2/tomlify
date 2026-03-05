export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  version: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'KMP';
  kmpPlatforms?: string[];
}

export const LIBRARIES: Library[] = [
  {
    id: 'compose-bom',
    name: 'Compose BOM',
    group: 'androidx.compose',
    artifact: 'compose-bom',
    version: '2024.02.00',
    description: 'Bill of Materials for Jetpack Compose libraries',
    category: 'Compose'
  },
  {
    id: 'compose-ui',
    name: 'Compose UI',
    group: 'androidx.compose.ui',
    artifact: 'ui',
    version: '',
    description: 'Fundamental building blocks of Compose UI',
    category: 'Compose'
  },
  {
    id: 'compose-material3',
    name: 'Material 3',
    group: 'androidx.compose.material3',
    artifact: 'material3',
    version: '',
    description: 'Material Design 3 components for Compose',
    category: 'Compose'
  },
  {
    id: 'ktor-client-core',
    name: 'Ktor Client',
    group: 'io.ktor',
    artifact: 'ktor-client-core',
    version: '2.3.8',
    description: 'Multiplatform asynchronous HTTP client',
    category: 'KMP',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'kotlinx-serialization-json',
    name: 'Kotlinx Serialization',
    group: 'org.jetbrains.kotlinx',
    artifact: 'kotlinx-serialization-json',
    version: '1.6.3',
    description: 'Kotlin multiplatform JSON serialization',
    category: 'KMP',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'sqldelight-runtime',
    name: 'SQLDelight',
    group: 'app.cash.sqldelight',
    artifact: 'runtime',
    version: '2.0.1',
    description: 'Type-safe SQL for Kotlin Multiplatform',
    category: 'KMP',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'macos', 'linux', 'windows']
  },
  {
    id: 'room-runtime',
    name: 'Room',
    group: 'androidx.room',
    artifact: 'room-runtime',
    version: '2.7.0-alpha01',
    description: 'Room persistence library (KMP support in 2.7.0+)',
    category: 'Architecture',
    kmpPlatforms: ['android', 'ios', 'jvm', 'macos', 'linux']
  },
  {
    id: 'retrofit',
    name: 'Retrofit',
    group: 'com.squareup.retrofit2',
    artifact: 'retrofit',
    version: '2.9.0',
    description: 'A type-safe HTTP client for Android and Java',
    category: 'Networking'
  },
  {
    id: 'okhttp',
    name: 'OkHttp',
    group: 'com.squareup.okhttp3',
    artifact: 'okhttp',
    version: '4.12.0',
    description: 'An HTTP client for Android and Java applications',
    category: 'Networking'
  },
  {
    id: 'coil-compose',
    name: 'Coil Compose',
    group: 'io.coil-kt',
    artifact: 'coil-compose',
    version: '2.6.0',
    description: 'Image loading for Android (KMP support in Coil 3.0+)',
    category: 'UI'
  },
  {
    id: 'timber',
    name: 'Timber',
    group: 'com.jakewharton.timber',
    artifact: 'timber',
    version: '5.0.1',
    description: 'A logger with a small, extensible API',
    category: 'Utilities'
  },
  {
    id: 'junit',
    name: 'JUnit 4',
    group: 'junit',
    artifact: 'junit',
    version: '4.13.2',
    description: 'A programmer-oriented testing framework for Java',
    category: 'Testing'
  }
];
