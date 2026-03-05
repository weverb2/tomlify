export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  version: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities';
}

export const LIBRARIES: Library[] = [
  {
    "id": "compose-multiplatform",
    "name": "Compose Multiplatform",
    "group": "org.jetbrains.compose.runtime",
    "artifact": "runtime",
    "version": "1.11.0-alpha03",
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
    "version": "1.1.0-beta03",
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
    "version": "3.5.0-beta01",
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
    "version": "3.4.0",
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
    "version": "6.7.1",
    "description": "Lottie animations for Jetpack Compose",
    "category": "UI"
  },
  {
    "id": "ktor-client-core",
    "name": "Ktor Client 3",
    "group": "io.ktor",
    "artifact": "ktor-client-core",
    "version": "3.4.1",
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
    "version": "3.0.0",
    "description": "Type-safe HTTP client for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "kotlinx-serialization-json",
    "name": "Kotlinx Serialization",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-serialization-json",
    "version": "1.10.0",
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
    "version": "4.0.0-beta.7",
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
    "version": "5.3.2",
    "description": "HTTP client and engine for Android and JVM",
    "category": "Networking"
  },
  {
    "id": "room-runtime",
    "name": "Room 2.7+",
    "group": "androidx.room",
    "artifact": "room-runtime",
    "version": "2.8.4",
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
    "version": "2.2.1",
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
    "version": "1.3.0-alpha06",
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
    "version": "1.3.0",
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
    "version": "4.2.0-RC1",
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
    "version": "2.51",
    "description": "Recommended DI solution for Android apps",
    "category": "DI"
  },
  {
    "id": "orbit-core",
    "name": "Orbit MVI",
    "group": "org.orbit-mvi",
    "artifact": "orbit-core",
    "version": "11.0.0",
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
    "version": "1.10.2",
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
    "version": "2.7.1",
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
    "version": "6.1.4",
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
  }
];
