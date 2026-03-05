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
  group?: string;
  artifact?: string;
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
    "stableVersion": "1.11.0-alpha03",
    "latestVersion": "1.11.0-alpha03",
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
    "stableVersion": "1.1.0-beta03",
    "latestVersion": "1.1.0-beta03",
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
    "stableVersion": "3.5.0-beta01",
    "latestVersion": "3.5.0-beta01",
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
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
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
    "stableVersion": "6.7.1",
    "latestVersion": "6.7.1",
    "description": "Lottie animations for Jetpack Compose",
    "category": "UI"
  },
  {
    "id": "ktor-client-core",
    "name": "Ktor Client 3",
    "group": "io.ktor",
    "artifact": "ktor-client-core",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
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
    "stableVersion": "3.0.0",
    "latestVersion": "3.0.0",
    "description": "Type-safe HTTP client for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "kotlinx-serialization-json",
    "name": "Kotlinx Serialization",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-serialization-json",
    "stableVersion": "1.10.0",
    "latestVersion": "1.10.0",
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
    "stableVersion": "4.0.0-beta.7",
    "latestVersion": "4.0.0-beta.7",
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
    "stableVersion": "5.3.2",
    "latestVersion": "5.3.2",
    "description": "HTTP client and engine for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "room-runtime",
    "name": "Room 2.7+",
    "group": "androidx.room",
    "artifact": "room-runtime",
    "stableVersion": "2.8.4",
    "latestVersion": "2.8.4",
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
    "stableVersion": "2.2.1",
    "latestVersion": "2.2.1",
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
    "stableVersion": "1.3.0-alpha06",
    "latestVersion": "1.3.0-alpha06",
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
    "stableVersion": "1.3.0",
    "latestVersion": "1.3.0",
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
    "stableVersion": "4.2.0-RC1",
    "latestVersion": "4.2.0-RC1",
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
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Recommended DI solution for Android apps",
    "category": "DI"
  },
  {
    "id": "orbit-core",
    "name": "Orbit MVI",
    "group": "org.orbit-mvi",
    "artifact": "orbit-core",
    "stableVersion": "11.0.0",
    "latestVersion": "11.0.0",
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
    "stableVersion": "1.10.2",
    "latestVersion": "1.10.2",
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
    "stableVersion": "2.7.1",
    "latestVersion": "2.7.1",
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
    "stableVersion": "6.1.4",
    "latestVersion": "6.1.4",
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
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Engine behind Jetpack Compose UI optimizations",
    "category": "Compiler Plugin"
  },
  {
    "id": "kotlin-serialization",
    "name": "Kotlinx Serialization",
    "pluginId": "org.jetbrains.kotlin.plugin.serialization",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Efficient JSON/Protobuf visitor code generation",
    "category": "Compiler Plugin"
  },
  {
    "id": "skie",
    "name": "SKIE",
    "pluginId": "co.touchlab.skie",
    "group": "co.touchlab.skie",
    "artifact": "co.touchlab.skie.gradle.plugin",
    "stableVersion": "0.10.10",
    "latestVersion": "0.10.10",
    "description": "Bridges Kotlin/Swift for Coroutines and Sealed Classes",
    "category": "Compiler Plugin"
  },
  {
    "id": "power-assert",
    "name": "Power-Assert",
    "pluginId": "com.bnorm.power.kotlin-power-assert",
    "group": "com.bnorm.power.kotlin-power-assert",
    "artifact": "com.bnorm.power.kotlin-power-assert.gradle.plugin",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Diagram-like error messages for assert calls",
    "category": "Compiler Plugin"
  },
  {
    "id": "atomicfu",
    "name": "AtomicFU",
    "pluginId": "org.jetbrains.kotlinx.atomicfu",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.20-RC2",
    "latestVersion": "2.3.20-RC2",
    "description": "Multiplatform API for atomic operations",
    "category": "Compiler Plugin"
  },
  {
    "id": "room-compiler",
    "name": "Room KSP",
    "pluginId": "androidx.room",
    "group": "androidx.room",
    "artifact": "room-compiler",
    "stableVersion": "2.8.4",
    "latestVersion": "2.8.4",
    "description": "Generates typesafe persistence code via KSP",
    "category": "KSP Processor"
  },
  {
    "id": "koin-annotations",
    "name": "Koin Annotations",
    "pluginId": "io.insert-koin.koin-annotations",
    "group": "io.insert-koin",
    "artifact": "koin-annotations",
    "stableVersion": "4.2.0-RC1",
    "latestVersion": "4.2.0-RC1",
    "description": "Compile-time safety for Koin DI",
    "category": "KSP Processor"
  },
  {
    "id": "moshi-ksp",
    "name": "Moshi KSP",
    "pluginId": "com.squareup.moshi.moshi-kotlin-codegen",
    "group": "com.squareup.moshi",
    "artifact": "moshi-kotlin-codegen",
    "stableVersion": "1.15.2",
    "latestVersion": "1.15.2",
    "description": "Generates Moshi adapters at compile-time",
    "category": "KSP Processor"
  },
  {
    "id": "lyricist",
    "name": "Lyricist",
    "pluginId": "be.vergauwen.lyricist",
    "group": "be.vergauwen.lyricist",
    "artifact": "be.vergauwen.lyricist.gradle.plugin",
    "stableVersion": "",
    "latestVersion": "",
    "description": "Type-safe multiplatform string resources",
    "category": "KSP Processor"
  }
];
