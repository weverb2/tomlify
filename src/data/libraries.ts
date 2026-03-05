export interface Library {
  id: string;
  name: string;
  group: string;
  artifact: string;
  stableVersion: string;
  latestVersion: string;
  description: string;
  category: 'Compose' | 'Networking' | 'Architecture' | 'UI' | 'Testing' | 'Utilities' | 'DI' | 'Data' | 'KMP' | 'Core';
  kmpPlatforms?: string[];
  managedBy?: string;
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

export const LIBRARIES: Library[] = [
  {
    "id": "androidx-core-ktx",
    "name": "Core KTX",
    "group": "androidx.core",
    "artifact": "core-ktx",
    "stableVersion": "1.17.0",
    "latestVersion": "1.18.0-rc01",
    "description": "Kotlin extensions for Android core",
    "category": "Core"
  },
  {
    "id": "androidx-lifecycle-runtime-ktx",
    "name": "Lifecycle Runtime KTX",
    "group": "androidx.lifecycle",
    "artifact": "lifecycle-runtime-ktx",
    "stableVersion": "2.10.0",
    "latestVersion": "2.11.0-alpha01",
    "description": "Lifecycle-aware Kotlin extensions",
    "category": "Core"
  },
  {
    "id": "androidx-activity-compose",
    "name": "Activity Compose",
    "group": "androidx.activity",
    "artifact": "activity-compose",
    "stableVersion": "1.12.4",
    "latestVersion": "1.13.0-rc01",
    "description": "Compose integration for Activity",
    "category": "Compose"
  },
  {
    "id": "androidx-compose-bom",
    "name": "Compose BOM",
    "group": "androidx.compose",
    "artifact": "compose-bom",
    "stableVersion": "2026.02.01",
    "latestVersion": "2026.02.01",
    "description": "Bill of Materials for Compose",
    "category": "Compose"
  },
  {
    "id": "androidx-compose-ui",
    "name": "Compose UI",
    "group": "androidx.compose.ui",
    "artifact": "ui",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Main Compose UI library",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-ui-graphics",
    "name": "Compose UI Graphics",
    "group": "androidx.compose.ui",
    "artifact": "ui-graphics",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Compose Graphics",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-ui-tooling",
    "name": "Compose UI Tooling",
    "group": "androidx.compose.ui",
    "artifact": "ui-tooling",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Compose Tooling (Debug)",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-ui-tooling-preview",
    "name": "Compose UI Tooling Preview",
    "group": "androidx.compose.ui",
    "artifact": "ui-tooling-preview",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Compose Tooling Preview",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-material3",
    "name": "Material 3",
    "group": "androidx.compose.material3",
    "artifact": "material3",
    "stableVersion": "1.4.0",
    "latestVersion": "1.5.0-alpha15",
    "description": "Material Design 3 for Compose",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-material-icons",
    "name": "Material Icons Extended",
    "group": "androidx.compose.material",
    "artifact": "material-icons-extended",
    "stableVersion": "1.7.8",
    "latestVersion": "1.7.8",
    "description": "Full set of Material icons",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-navigation3-runtime",
    "name": "Navigation3 Runtime",
    "group": "androidx.navigation3",
    "artifact": "navigation3-runtime",
    "stableVersion": "1.0.1",
    "latestVersion": "1.1.0-alpha05",
    "description": "The next generation of Navigation",
    "category": "Architecture"
  },
  {
    "id": "androidx-navigation3-ui",
    "name": "Navigation3 UI",
    "group": "androidx.navigation3",
    "artifact": "navigation3-ui",
    "stableVersion": "1.0.1",
    "latestVersion": "1.1.0-alpha05",
    "description": "UI for Navigation3",
    "category": "Architecture"
  },
  {
    "id": "androidx-hilt-navigation",
    "name": "Hilt Navigation Compose",
    "group": "androidx.hilt",
    "artifact": "hilt-navigation-compose",
    "stableVersion": "1.3.0",
    "latestVersion": "1.3.0",
    "description": "Hilt integration for Compose Navigation",
    "category": "DI"
  },
  {
    "id": "coil-compose",
    "name": "Coil Compose",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-compose",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "Image loading for Compose",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm"
    ]
  },
  {
    "id": "coil-network-okhttp",
    "name": "Coil OkHttp",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-network-okhttp",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "OkHttp engine for Coil 3",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "ktor-client-core",
    "name": "Ktor Client",
    "group": "io.ktor",
    "artifact": "ktor-client-core",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Async HTTP client",
    "category": "Networking",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm"
    ]
  },
  {
    "id": "ktor-client-okhttp",
    "name": "Ktor OkHttp Engine",
    "group": "io.ktor",
    "artifact": "ktor-client-okhttp",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "OkHttp engine for Ktor",
    "category": "Networking"
  },
  {
    "id": "ktor-client-content-negotiation",
    "name": "Ktor Content Negotiation",
    "group": "io.ktor",
    "artifact": "ktor-client-content-negotiation",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Content negotiation for Ktor",
    "category": "Networking"
  },
  {
    "id": "ktor-serialization-kotlinx-json",
    "name": "Ktor Kotlinx JSON",
    "group": "io.ktor",
    "artifact": "ktor-serialization-kotlinx-json",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Kotlinx Serialization for Ktor",
    "category": "Networking"
  },
  {
    "id": "ktor-client-logging",
    "name": "Ktor Logging",
    "group": "io.ktor",
    "artifact": "ktor-client-logging",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Logging for Ktor",
    "category": "Networking"
  },
  {
    "id": "kotlinx-serialization-json",
    "name": "Kotlinx Serialization",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-serialization-json",
    "stableVersion": "1.10.0",
    "latestVersion": "1.10.0",
    "description": "JSON serialization",
    "category": "Utilities",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js",
      "wasm"
    ]
  },
  {
    "id": "hilt-android",
    "name": "Hilt Android",
    "group": "com.google.dagger",
    "artifact": "hilt-android",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "DI for Android",
    "category": "DI"
  },
  {
    "id": "hilt-android-compiler",
    "name": "Hilt Android Compiler",
    "group": "com.google.dagger",
    "artifact": "hilt-android-compiler",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Hilt Compiler (KSP/Kapt)",
    "category": "DI"
  },
  {
    "id": "metro-runtime",
    "name": "Metro Runtime",
    "group": "dev.zacsweers.metro",
    "artifact": "runtime",
    "stableVersion": "0.11.2",
    "latestVersion": "0.11.2",
    "description": "A compile-time dependency injection framework for Kotlin",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm",
      "js",
      "macos",
      "linux",
      "windows"
    ]
  },
  {
    "id": "junit",
    "name": "JUnit 4",
    "group": "junit",
    "artifact": "junit",
    "stableVersion": "4.13.2",
    "latestVersion": "4.13.2",
    "description": "Standard unit testing",
    "category": "Testing"
  },
  {
    "id": "androidx-junit",
    "name": "AndroidX JUnit",
    "group": "androidx.test.ext",
    "artifact": "junit",
    "stableVersion": "1.3.0",
    "latestVersion": "1.3.0",
    "description": "JUnit extensions for Android",
    "category": "Testing"
  },
  {
    "id": "androidx-espresso-core",
    "name": "Espresso Core",
    "group": "androidx.test.espresso",
    "artifact": "espresso-core",
    "stableVersion": "3.7.0",
    "latestVersion": "3.7.0",
    "description": "UI testing for Android",
    "category": "Testing"
  },
  {
    "id": "androidx-compose-ui-test-junit4",
    "name": "Compose UI Test JUnit4",
    "group": "androidx.compose.ui",
    "artifact": "ui-test-junit4",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Compose testing support",
    "category": "Testing",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-ui-test-manifest",
    "name": "Compose UI Test Manifest",
    "group": "androidx.compose.ui",
    "artifact": "ui-test-manifest",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Manifest for Compose testing",
    "category": "Testing",
    "managedBy": "androidx-compose-bom"
  }
];

export const PLUGINS: Plugin[] = [
  {
    "id": "metro",
    "name": "Metro DI",
    "pluginId": "dev.zacsweers.metro",
    "group": "dev.zacsweers.metro",
    "artifact": "gradle-plugin",
    "stableVersion": "0.11.2",
    "latestVersion": "0.11.2",
    "description": "Metro DI Compiler Plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "android-application",
    "name": "Android Application",
    "pluginId": "com.android.application",
    "group": "com.android.tools.build",
    "artifact": "gradle",
    "stableVersion": "2.3.0",
    "latestVersion": "2.3.0",
    "description": "AGP Application Plugin",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-compose",
    "name": "Kotlin Compose Compiler",
    "pluginId": "org.jetbrains.kotlin.plugin.compose",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Compose Plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "kotlin-serialization",
    "name": "Kotlin Serialization",
    "pluginId": "org.jetbrains.kotlin.plugin.serialization",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Serialization Plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "spotless",
    "name": "Spotless",
    "pluginId": "com.diffplug.spotless",
    "group": "com.diffplug.spotless",
    "artifact": "spotless-plugin-gradle",
    "stableVersion": "8.3.0",
    "latestVersion": "8.3.0",
    "description": "Code formatting plugin",
    "category": "Build Tool"
  },
  {
    "id": "ksp",
    "name": "KSP",
    "pluginId": "com.google.devtools.ksp",
    "group": "com.google.devtools.ksp",
    "artifact": "symbol-processing-api",
    "stableVersion": "2.3.6",
    "latestVersion": "2.3.6",
    "description": "Kotlin Symbol Processing",
    "category": "Build Tool"
  },
  {
    "id": "hilt",
    "name": "Hilt Gradle Plugin",
    "pluginId": "com.google.dagger.hilt.android",
    "group": "com.google.dagger",
    "artifact": "hilt-android-gradle-plugin",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Hilt DI Plugin",
    "category": "Build Tool"
  }
];
