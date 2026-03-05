export interface Library {
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

export const LIBRARIES: Library[] = [
  {
    "id": "compose-multiplatform",
    "name": "Compose Multiplatform",
    "group": "org.jetbrains.compose.runtime",
    "artifact": "runtime",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Declarative UI for Android, iOS, Desktop, and Web",
    "category": "Compose",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm"
    ]
  },
  {
    "id": "voyager-navigator",
    "name": "Voyager",
    "group": "cafe.adriel.voyager",
    "artifact": "voyager-navigator",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Pragmatic navigation library for Compose",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm"
    ]
  },
  {
    "id": "decompose",
    "name": "Decompose",
    "group": "com.arkivanov.decompose",
    "artifact": "decompose",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Lifecycle-aware component routing for KMP",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "coil-compose",
    "name": "Coil 3",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-compose",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Image loading library for Android and KMP",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos"
    ]
  },
  {
    "id": "lottie-compose",
    "name": "Lottie Compose",
    "group": "com.airbnb.android",
    "artifact": "lottie-compose",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Lottie animations for Jetpack Compose",
    "category": "UI"
  },
  {
    "id": "ktor-client-core",
    "name": "Ktor Client 3",
    "group": "io.ktor",
    "artifact": "ktor-client-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Async HTTP client with WASM and GraphQL support",
    "category": "Networking",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "retrofit",
    "name": "Retrofit",
    "group": "com.squareup.retrofit2",
    "artifact": "retrofit",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Type-safe HTTP client for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "kotlinx-serialization-json",
    "name": "Kotlinx Serialization",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-serialization-json",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Native Kotlin JSON serialization",
    "category": "Utilities",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "apollo-runtime",
    "name": "Apollo Kotlin",
    "group": "com.apollographql.apollo3",
    "artifact": "apollo-runtime",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Strongly-typed GraphQL client for Kotlin",
    "category": "Networking",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "okhttp",
    "name": "OkHttp",
    "group": "com.squareup.okhttp3",
    "artifact": "okhttp",
    "stableVersion": "",
    "latestVersion": "",
    "description": "HTTP client and engine for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "room-runtime",
    "name": "Room 2.7+",
    "group": "androidx.room",
    "artifact": "room-runtime",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Google persistence library with KMP support",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "macos",
      "linux"
    ]
  },
  {
    "id": "sqldelight-runtime",
    "name": "SQLDelight",
    "group": "app.cash.sqldelight",
    "artifact": "runtime",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Typesafe SQL API generation from SQL statements",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "datastore-preferences",
    "name": "DataStore",
    "group": "androidx.datastore",
    "artifact": "datastore-preferences-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Modern, reactive key-value storage replacement",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "multiplatform-settings",
    "name": "Multiplatform Settings",
    "group": "com.russhwolf",
    "artifact": "multiplatform-settings",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Unified key-value storage wrapper for KMP",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "koin-core",
    "name": "Koin 4",
    "group": "io.insert-koin",
    "artifact": "koin-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Pragmatic lightweight DI framework for KMP",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "hilt-android",
    "name": "Hilt",
    "group": "com.google.dagger",
    "artifact": "hilt-android",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Recommended DI solution for Android apps",
    "category": "DI"
  },
  {
    "id": "orbit-core",
    "name": "Orbit MVI",
    "group": "org.orbit-mvi",
    "artifact": "orbit-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Low-boilerplate MVI framework using Kotlin Flow",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "kotlinx-coroutines-core",
    "name": "Kotlinx Coroutines",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-coroutines-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Foundational library for async and concurrency",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "napier",
    "name": "Napier",
    "group": "io.github.aakira",
    "artifact": "napier",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Multiplatform logger mimicking Timber API",
    "category": "Utilities",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "kotest-assertions-core",
    "name": "Kotest",
    "group": "io.kotest",
    "artifact": "kotest-assertions-core",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Comprehensive KMP testing and assertions",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "compose-bom",
    "name": "Compose BOM",
    "group": "androidx.compose",
    "artifact": "compose-bom",
    "stableVersion": "2026.02.01",
    "latestVersion": "2026.02.01",
    "description": "Bill of Materials for Jetpack Compose libraries",
    "category": "Compose"
  }
];

export const PLUGINS: Plugin[] = [
  {
    "id": "compose-compiler",
    "name": "Compose Compiler",
    "pluginId": "org.jetbrains.kotlin.plugin.compose",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Engine behind Jetpack Compose UI optimizations",
    "category": "Compiler Plugin"
  },
  {
    "id": "kotlin-serialization",
    "name": "Kotlinx Serialization",
    "pluginId": "org.jetbrains.kotlin.plugin.serialization",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Efficient JSON/Protobuf visitor code generation",
    "category": "Compiler Plugin"
  },
  {
    "id": "skie",
    "name": "SKIE",
    "pluginId": "co.touchlab.skie",
    "stableVersion": "0.8.2",
    "latestVersion": "0.8.2",
    "description": "Bridges Kotlin/Swift for Coroutines and Sealed Classes",
    "category": "Compiler Plugin"
  },
  {
    "id": "power-assert",
    "name": "Power-Assert",
    "pluginId": "com.bnorm.power.kotlin-power-assert",
    "stableVersion": "0.13.0",
    "latestVersion": "0.13.0",
    "description": "Diagram-like error messages for assert calls",
    "category": "Compiler Plugin"
  },
  {
    "id": "atomicfu",
    "name": "AtomicFU",
    "pluginId": "org.jetbrains.kotlinx.atomicfu",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Multiplatform API for atomic operations",
    "category": "Compiler Plugin"
  },
  {
    "id": "room-compiler",
    "name": "Room KSP",
    "pluginId": "androidx.room",
    "stableVersion": "2.8.4",
    "latestVersion": "2.8.4",
    "description": "Generates typesafe persistence code via KSP",
    "category": "KSP Processor"
  },
  {
    "id": "koin-annotations",
    "name": "Koin Annotations",
    "pluginId": "io.insert-koin.koin-annotations",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Compile-time safety for Koin DI",
    "category": "KSP Processor"
  },
  {
    "id": "moshi-ksp",
    "name": "Moshi KSP",
    "pluginId": "com.squareup.moshi.moshi-kotlin-codegen",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Generates Moshi adapters at compile-time",
    "category": "KSP Processor"
  },
  {
    "id": "lyricist",
    "name": "Lyricist",
    "pluginId": "be.vergauwen.lyricist",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Type-safe multiplatform string resources",
    "category": "KSP Processor"
  }
];
