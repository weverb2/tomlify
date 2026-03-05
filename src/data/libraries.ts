export interface Library {
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

export const LIBRARIES: Library[] = [
  // --- UI, Images & Navigation ---
  {
    id: 'compose-multiplatform',
    name: 'Compose Multiplatform',
    group: 'org.jetbrains.compose.runtime',
    artifact: 'runtime',
    version: '1.6.10',
    description: 'Declarative UI for Android, iOS, Desktop, and Web',
    category: 'Compose',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm']
  },
  {
    id: 'voyager-navigator',
    name: 'Voyager',
    group: 'cafe.adriel.voyager',
    artifact: 'voyager-navigator',
    version: '1.1.0-beta03',
    description: 'Pragmatic navigation library for Compose',
    category: 'UI',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm']
  },
  {
    id: 'decompose',
    name: 'Decompose',
    group: 'com.arkivanov.decompose',
    artifact: 'decompose',
    version: '3.1.0',
    description: 'Lifecycle-aware component routing for KMP',
    category: 'Architecture',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'coil-compose',
    name: 'Coil 3',
    group: 'io.coil-kt.coil3',
    artifact: 'coil-compose',
    version: '3.0.0-alpha06',
    description: 'Image loading library for Android and KMP',
    category: 'UI',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos']
  },
  {
    id: 'lottie-compose',
    name: 'Lottie Compose',
    group: 'com.airbnb.android',
    artifact: 'lottie-compose',
    version: '6.4.1',
    description: 'Lottie animations for Jetpack Compose',
    category: 'UI'
  },

  // --- Networking & Serialization ---
  {
    id: 'ktor-client-core',
    name: 'Ktor Client 3',
    group: 'io.ktor',
    artifact: 'ktor-client-core',
    version: '3.0.0-rc-1',
    description: 'Async HTTP client with WASM and GraphQL support',
    category: 'Networking',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'retrofit',
    name: 'Retrofit',
    group: 'com.squareup.retrofit2',
    artifact: 'retrofit',
    version: '2.11.0',
    description: 'Type-safe HTTP client for Android and JVM',
    category: 'Networking'
  },
  {
    id: 'kotlinx-serialization-json',
    name: 'Kotlinx Serialization',
    group: 'org.jetbrains.kotlinx',
    artifact: 'kotlinx-serialization-json',
    version: '1.7.1',
    description: 'Native Kotlin JSON serialization',
    category: 'Utilities',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'apollo-runtime',
    name: 'Apollo Kotlin',
    group: 'com.apollographql.apollo3',
    artifact: 'apollo-runtime',
    version: '4.0.0-beta.7',
    description: 'Strongly-typed GraphQL client for Kotlin',
    category: 'Networking',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'macos', 'linux', 'windows']
  },
  {
    id: 'okhttp',
    name: 'OkHttp',
    group: 'com.squareup.okhttp3',
    artifact: 'okhttp',
    version: '4.12.0',
    description: 'HTTP client and engine for Android and JVM',
    category: 'Networking'
  },

  // --- Data & Persistence ---
  {
    id: 'room-runtime',
    name: 'Room 2.7+',
    group: 'androidx.room',
    artifact: 'room-runtime',
    version: '2.7.0-alpha07',
    description: 'Google persistence library with KMP support',
    category: 'Data',
    kmpPlatforms: ['android', 'ios', 'jvm', 'macos', 'linux']
  },
  {
    id: 'sqldelight-runtime',
    name: 'SQLDelight',
    group: 'app.cash.sqldelight',
    artifact: 'runtime',
    version: '2.0.2',
    description: 'Typesafe SQL API generation from SQL statements',
    category: 'Data',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'macos', 'linux', 'windows']
  },
  {
    id: 'datastore-preferences',
    name: 'DataStore',
    group: 'androidx.datastore',
    artifact: 'datastore-preferences-core',
    version: '1.1.1',
    description: 'Modern, reactive key-value storage replacement',
    category: 'Data',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'macos', 'linux', 'windows']
  },
  {
    id: 'multiplatform-settings',
    name: 'Multiplatform Settings',
    group: 'com.russhwolf',
    artifact: 'multiplatform-settings',
    version: '1.1.1',
    description: 'Unified key-value storage wrapper for KMP',
    category: 'Data',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'macos', 'linux', 'windows']
  },

  // --- Architecture & DI ---
  {
    id: 'koin-core',
    name: 'Koin 4',
    group: 'io.insert-koin',
    artifact: 'koin-core',
    version: '4.0.0-RC1',
    description: 'Pragmatic lightweight DI framework for KMP',
    category: 'DI',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'hilt-android',
    name: 'Hilt',
    group: 'com.google.dagger',
    artifact: 'hilt-android',
    version: '2.51.1',
    description: 'Recommended DI solution for Android apps',
    category: 'DI'
  },
  {
    id: 'orbit-core',
    name: 'Orbit MVI',
    group: 'org.orbit-mvi',
    artifact: 'orbit-core',
    version: '6.1.0',
    description: 'Low-boilerplate MVI framework using Kotlin Flow',
    category: 'Architecture',
    kmpPlatforms: ['android', 'ios', 'jvm', 'macos', 'linux', 'windows']
  },
  {
    id: 'kotlinx-coroutines-core',
    name: 'Kotlinx Coroutines',
    group: 'org.jetbrains.kotlinx',
    artifact: 'kotlinx-coroutines-core',
    version: '1.9.0-RC',
    description: 'Foundational library for async and concurrency',
    category: 'Architecture',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },

  // --- Utilities & Testing ---
  {
    id: 'napier',
    name: 'Napier',
    group: 'io.github.aakira',
    artifact: 'napier',
    version: '2.7.1',
    description: 'Multiplatform logger mimicking Timber API',
    category: 'Utilities',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  },
  {
    id: 'kotest-assertions-core',
    name: 'Kotest',
    group: 'io.kotest',
    artifact: 'kotest-assertions-core',
    version: '5.9.1',
    description: 'Comprehensive KMP testing and assertions',
    category: 'Testing',
    kmpPlatforms: ['android', 'ios', 'jvm', 'js', 'wasm', 'macos', 'linux', 'windows']
  }
];

export const PLUGINS: Plugin[] = [
  {
    id: 'compose-compiler',
    name: 'Compose Compiler',
    pluginId: 'org.jetbrains.kotlin.plugin.compose',
    version: '2.0.0',
    description: 'Engine behind Jetpack Compose UI optimizations',
    category: 'Compiler Plugin'
  },
  {
    id: 'kotlin-serialization',
    name: 'Kotlinx Serialization',
    pluginId: 'org.jetbrains.kotlin.plugin.serialization',
    version: '2.0.0',
    description: 'Efficient JSON/Protobuf visitor code generation',
    category: 'Compiler Plugin'
  },
  {
    id: 'skie',
    name: 'SKIE',
    pluginId: 'co.touchlab.skie',
    version: '0.8.2',
    description: 'Bridges Kotlin/Swift for Coroutines and Sealed Classes',
    category: 'Compiler Plugin'
  },
  {
    id: 'power-assert',
    name: 'Power-Assert',
    pluginId: 'com.bnorm.power.kotlin-power-assert',
    version: '0.13.0',
    description: 'Diagram-like error messages for assert calls',
    category: 'Compiler Plugin'
  },
  {
    id: 'atomicfu',
    name: 'AtomicFU',
    pluginId: 'org.jetbrains.kotlinx.atomicfu',
    version: '0.25.0',
    description: 'Multiplatform API for atomic operations',
    category: 'Compiler Plugin'
  },
  {
    id: 'room-compiler',
    name: 'Room KSP',
    pluginId: 'androidx.room', // Using as placeholder, usually added via dependencies
    version: '2.7.0-alpha07',
    description: 'Generates typesafe persistence code via KSP',
    category: 'KSP Processor'
  },
  {
    id: 'koin-annotations',
    name: 'Koin Annotations',
    pluginId: 'io.insert-koin.koin-annotations',
    version: '1.3.1',
    description: 'Compile-time safety for Koin DI',
    category: 'KSP Processor'
  },
  {
    id: 'moshi-ksp',
    name: 'Moshi KSP',
    pluginId: 'com.squareup.moshi.moshi-kotlin-codegen',
    version: '1.15.1',
    description: 'Generates Moshi adapters at compile-time',
    category: 'KSP Processor'
  },
  {
    id: 'lyricist',
    name: 'Lyricist',
    pluginId: 'be.vergauwen.lyricist',
    version: '0.10.0',
    description: 'Type-safe multiplatform string resources',
    category: 'KSP Processor'
  }
];
