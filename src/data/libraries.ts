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
    "id": "agp-lib",
    "name": "AGP Artifact",
    "group": "com.android.tools.build",
    "artifact": "gradle",
    "stableVersion": "2.3.0",
    "latestVersion": "2.3.0",
    "description": "Android Gradle Plugin library",
    "category": "Core"
  },
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
    "id": "androidx-activity-ktx",
    "name": "Activity KTX",
    "group": "androidx.activity",
    "artifact": "activity-ktx",
    "stableVersion": "1.12.4",
    "latestVersion": "1.13.0-rc01",
    "description": "Kotlin extensions for Activity",
    "category": "Core"
  },
  {
    "id": "androidx-annotation",
    "name": "Annotation",
    "group": "androidx.annotation",
    "artifact": "annotation",
    "stableVersion": "1.9.1",
    "latestVersion": "1.9.1",
    "description": "AndroidX Annotations",
    "category": "Core"
  },
  {
    "id": "androidx-appcompat",
    "name": "AppCompat",
    "group": "androidx.appcompat",
    "artifact": "appcompat",
    "stableVersion": "1.7.1",
    "latestVersion": "1.7.1",
    "description": "Android v7 appcompat library",
    "category": "Core"
  },
  {
    "id": "androidx-browser",
    "name": "Browser",
    "group": "androidx.browser",
    "artifact": "browser",
    "stableVersion": "1.9.0",
    "latestVersion": "1.10.0-alpha04",
    "description": "Android Custom Tabs support",
    "category": "Core"
  },
  {
    "id": "desugar-jdk-libs",
    "name": "Desugar JDK Libs",
    "group": "com.android.tools",
    "artifact": "desugar_jdk_libs",
    "stableVersion": "2.1.5",
    "latestVersion": "2.1.5",
    "description": "Java 8+ API desugaring",
    "category": "Core"
  },
  {
    "id": "appdirs",
    "name": "AppDirs",
    "group": "net.harawata",
    "artifact": "appdirs",
    "stableVersion": "1.5.0",
    "latestVersion": "1.5.0",
    "description": "Local storage directories utility",
    "category": "Core"
  },
  {
    "id": "slf4j-nop",
    "name": "SLF4J NOP",
    "group": "org.slf4j",
    "artifact": "slf4j-nop",
    "stableVersion": "2.0.17",
    "latestVersion": "2.1.0-alpha1",
    "description": "SLF4J NOP binding",
    "category": "Core"
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
    "id": "androidx-compose-google-fonts",
    "name": "Compose Google Fonts",
    "group": "androidx.compose.ui",
    "artifact": "ui-text-google-fonts",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Google Fonts for Compose",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-compose-runtime-rxjava3",
    "name": "Compose Runtime RXJava3",
    "group": "androidx.compose.runtime",
    "artifact": "runtime-rxjava3",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "RXJava3 adapter for Compose",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "compose-runtime",
    "name": "Compose Runtime",
    "group": "androidx.compose.runtime",
    "artifact": "runtime",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Compose Runtime engine",
    "category": "Compose",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "jb-compose-foundation",
    "name": "Compose Foundation (JB)",
    "group": "org.jetbrains.compose.foundation",
    "artifact": "foundation",
    "stableVersion": "1.10.2",
    "latestVersion": "1.11.0-alpha03",
    "description": "JB Compose Foundation",
    "category": "Compose",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm",
      "js"
    ]
  },
  {
    "id": "jb-compose-resources",
    "name": "Compose Resources (JB)",
    "group": "org.jetbrains.compose.components",
    "artifact": "components-resources",
    "stableVersion": "1.10.2",
    "latestVersion": "1.11.0-alpha03",
    "description": "JB Compose Resources",
    "category": "Compose",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm",
      "js"
    ]
  },
  {
    "id": "jb-compose-material-icons",
    "name": "Material Icons (JB)",
    "group": "org.jetbrains.compose.material",
    "artifact": "material-icons-core",
    "stableVersion": "1.7.3",
    "latestVersion": "1.7.3",
    "description": "JB Compose Material Icons",
    "category": "Compose",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "jb-compose-material3",
    "name": "Material 3 (JB)",
    "group": "org.jetbrains.compose.material3",
    "artifact": "material3",
    "stableVersion": "1.9.0",
    "latestVersion": "1.11.0-alpha03",
    "description": "JB Compose Material 3",
    "category": "Compose",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm",
      "js"
    ]
  },
  {
    "id": "jb-compose-navigationevent",
    "name": "NavigationEvent (JB)",
    "group": "org.jetbrains.androidx.navigationevent",
    "artifact": "navigationevent-compose",
    "stableVersion": "1.0.1",
    "latestVersion": "1.0.1",
    "description": "JB Compose Navigation Event",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "androidx-navigation3-runtime",
    "name": "Navigation3 Runtime",
    "group": "androidx.navigation3",
    "artifact": "navigation3-runtime",
    "stableVersion": "1.0.1",
    "latestVersion": "1.1.0-alpha05",
    "description": "Experimental Navigation 3",
    "category": "Architecture"
  },
  {
    "id": "androidx-navigation3-ui",
    "name": "Navigation3 UI",
    "group": "androidx.navigation3",
    "artifact": "navigation3-ui",
    "stableVersion": "1.0.1",
    "latestVersion": "1.1.0-alpha05",
    "description": "Navigation 3 UI",
    "category": "Architecture"
  },
  {
    "id": "jb-lifecycle-runtime",
    "name": "Lifecycle Runtime (JB)",
    "group": "org.jetbrains.androidx.lifecycle",
    "artifact": "lifecycle-runtime-compose",
    "stableVersion": "2.9.6",
    "latestVersion": "2.10.0-beta01",
    "description": "JB Multiplatform Lifecycle",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "jb-lifecycle-viewmodel",
    "name": "Lifecycle ViewModel (JB)",
    "group": "org.jetbrains.androidx.lifecycle",
    "artifact": "lifecycle-viewmodel-compose",
    "stableVersion": "2.9.6",
    "latestVersion": "2.10.0-beta01",
    "description": "JB Multiplatform ViewModel",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "molecule-runtime",
    "name": "Molecule Runtime",
    "group": "app.cash.molecule",
    "artifact": "molecule-runtime",
    "stableVersion": "2.2.0",
    "latestVersion": "2.2.0",
    "description": "Recompose values into a Flow",
    "category": "Architecture",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "mosaic-runtime",
    "name": "Mosaic Runtime",
    "group": "com.jakewharton.mosaic",
    "artifact": "mosaic-runtime",
    "stableVersion": "0.18.0",
    "latestVersion": "0.18.0",
    "description": "Compose for console UI",
    "category": "Architecture"
  },
  {
    "id": "coil-core",
    "name": "Coil Core",
    "group": "io.coil-kt.coil3",
    "artifact": "coil",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "Main Coil image loader",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "coil-compose",
    "name": "Coil Compose",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-compose-core",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "Coil Compose integration",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "coil-network-okhttp",
    "name": "Coil OkHttp",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-network-okhttp",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "OkHttp engine for Coil",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "coil-network-ktor",
    "name": "Coil Ktor",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-network-ktor3",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "Ktor engine for Coil",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm"
    ]
  },
  {
    "id": "coil-test",
    "name": "Coil Test",
    "group": "io.coil-kt.coil3",
    "artifact": "coil-test",
    "stableVersion": "3.4.0",
    "latestVersion": "3.4.0",
    "description": "Testing utilities for Coil",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "telephoto-flick",
    "name": "Telephoto Flick",
    "group": "me.saket.telephoto",
    "artifact": "flick",
    "stableVersion": "0.18.0",
    "latestVersion": "0.18.0",
    "description": "Flick-to-dismiss for Compose",
    "category": "UI"
  },
  {
    "id": "telephoto-zoomable",
    "name": "Telephoto Zoomable",
    "group": "me.saket.telephoto",
    "artifact": "zoomable-image-coil3",
    "stableVersion": "0.18.0",
    "latestVersion": "0.18.0",
    "description": "Zoomable images for Compose",
    "category": "UI"
  },
  {
    "id": "window-size-multiplatform",
    "name": "WindowSizeClass Multiplatform",
    "group": "dev.chrisbanes.material3",
    "artifact": "material3-window-size-class-multiplatform",
    "stableVersion": "0.5.0",
    "latestVersion": "0.5.0",
    "description": "WindowSizeClass for KMP",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "markdown-renderer",
    "name": "Markdown Renderer",
    "group": "com.mikepenz",
    "artifact": "multiplatform-markdown-renderer",
    "stableVersion": "0.39.2",
    "latestVersion": "0.39.2",
    "description": "Markdown for Compose Multiplatform",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm"
    ]
  },
  {
    "id": "markdown-renderer-m3",
    "name": "Markdown Renderer M3",
    "group": "com.mikepenz",
    "artifact": "multiplatform-markdown-renderer-m3",
    "stableVersion": "0.39.2",
    "latestVersion": "0.39.2",
    "description": "M3 Markdown for Compose",
    "category": "UI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm"
    ]
  },
  {
    "id": "picnic",
    "name": "Picnic",
    "group": "com.jakewharton.picnic",
    "artifact": "picnic",
    "stableVersion": "0.7.0",
    "latestVersion": "0.7.0",
    "description": "Kotlin DSL for console tables",
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
    "id": "ktor-client-auth",
    "name": "Ktor Auth",
    "group": "io.ktor",
    "artifact": "ktor-client-auth",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Auth feature for Ktor",
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
    "id": "ktor-client-js",
    "name": "Ktor JS Engine",
    "group": "io.ktor",
    "artifact": "ktor-client-js",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "JS engine for Ktor",
    "category": "Networking",
    "kmpPlatforms": [
      "js",
      "wasm"
    ]
  },
  {
    "id": "ktor-serialization-json",
    "name": "Ktor Kotlinx JSON",
    "group": "io.ktor",
    "artifact": "ktor-serialization-kotlinx-json",
    "stableVersion": "3.4.1",
    "latestVersion": "3.4.1",
    "description": "Kotlinx Serialization for Ktor",
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
    "id": "okhttp-core",
    "name": "OkHttp",
    "group": "com.squareup.okhttp3",
    "artifact": "okhttp",
    "stableVersion": "5.3.2",
    "latestVersion": "5.3.2",
    "description": "HTTP client for Java/Android",
    "category": "Networking"
  },
  {
    "id": "okhttp-logging",
    "name": "OkHttp Logging",
    "group": "com.squareup.okhttp3",
    "artifact": "logging-interceptor",
    "stableVersion": "5.3.2",
    "latestVersion": "5.3.2",
    "description": "Logging interceptor for OkHttp",
    "category": "Networking"
  },
  {
    "id": "eithernet",
    "name": "EitherNet",
    "group": "com.slack.eithernet",
    "artifact": "eithernet",
    "stableVersion": "2.0.0",
    "latestVersion": "2.0.0",
    "description": "Error handling for Retrofit/Networking",
    "category": "Networking"
  },
  {
    "id": "eithernet-test",
    "name": "EitherNet Test",
    "group": "com.slack.eithernet",
    "artifact": "eithernet-test-fixtures",
    "stableVersion": "2.0.0",
    "latestVersion": "2.0.0",
    "description": "Testing fixtures for EitherNet",
    "category": "Testing"
  },
  {
    "id": "jsoup",
    "name": "Jsoup",
    "group": "org.jsoup",
    "artifact": "jsoup",
    "stableVersion": "1.22.1",
    "latestVersion": "1.22.1",
    "description": "Java HTML parser",
    "category": "Networking"
  },
  {
    "id": "ksoup",
    "name": "KSoup",
    "group": "com.fleeksoft.ksoup",
    "artifact": "ksoup-ktor2",
    "stableVersion": "0.2.0",
    "latestVersion": "0.2.0",
    "description": "Ktor 2 based KSoup",
    "category": "Networking"
  },
  {
    "id": "hilt-android",
    "name": "Hilt Android",
    "group": "com.google.dagger",
    "artifact": "hilt-android",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Hilt for Android",
    "category": "DI"
  },
  {
    "id": "hilt-android-compiler",
    "name": "Hilt Compiler",
    "group": "com.google.dagger",
    "artifact": "hilt-android-compiler",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Hilt Compiler",
    "category": "DI"
  },
  {
    "id": "hilt-core",
    "name": "Hilt Core",
    "group": "com.google.dagger",
    "artifact": "hilt-core",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Hilt Core (no Android)",
    "category": "DI"
  },
  {
    "id": "dagger-core",
    "name": "Dagger Core",
    "group": "com.google.dagger",
    "artifact": "dagger",
    "stableVersion": "2.59.2",
    "latestVersion": "2.59.2",
    "description": "Dagger DI core",
    "category": "DI"
  },
  {
    "id": "kotlin-inject-runtime",
    "name": "kotlin-inject Runtime",
    "group": "me.tatarka.inject",
    "artifact": "kotlin-inject-runtime",
    "stableVersion": "0.9.0",
    "latestVersion": "0.9.0",
    "description": "Dagger-like DI for KMP",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "wasm",
      "js"
    ]
  },
  {
    "id": "kotlin-inject-compiler",
    "name": "kotlin-inject Compiler",
    "group": "me.tatarka.inject",
    "artifact": "kotlin-inject-compiler-ksp",
    "stableVersion": "0.9.0",
    "latestVersion": "0.9.0",
    "description": "kotlin-inject KSP compiler",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "kotlin-inject-anvil-runtime",
    "name": "kotlin-inject-anvil Runtime",
    "group": "software.amazon.lastmile.kotlin.inject.anvil",
    "artifact": "runtime",
    "stableVersion": "0.1.7",
    "latestVersion": "0.1.7",
    "description": "Anvil-like support for kotlin-inject",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "kotlin-inject-anvil-compiler",
    "name": "kotlin-inject-anvil Compiler",
    "group": "software.amazon.lastmile.kotlin.inject.anvil",
    "artifact": "compiler",
    "stableVersion": "0.1.7",
    "latestVersion": "0.1.7",
    "description": "kotlin-inject-anvil compiler",
    "category": "DI"
  },
  {
    "id": "anvil-annotations",
    "name": "Anvil Annotations",
    "group": "dev.zacsweers.anvil",
    "artifact": "annotations",
    "stableVersion": "0.5.3",
    "latestVersion": "0.5.3",
    "description": "Dagger factory generation",
    "category": "DI"
  },
  {
    "id": "metro-runtime",
    "name": "Metro Runtime",
    "group": "dev.zacsweers.metro",
    "artifact": "runtime",
    "stableVersion": "0.11.2",
    "latestVersion": "0.11.2",
    "description": "Compile-time DI for Kotlin",
    "category": "DI",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "datastore-preferences",
    "name": "DataStore Preferences",
    "group": "androidx.datastore",
    "artifact": "datastore-preferences",
    "stableVersion": "1.2.0",
    "latestVersion": "1.3.0-alpha06",
    "description": "Jetpack DataStore Preferences",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "okio",
    "name": "Okio",
    "group": "com.squareup.okio",
    "artifact": "okio",
    "stableVersion": "3.16.4",
    "latestVersion": "3.16.4",
    "description": "Modern I/O library",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js"
    ]
  },
  {
    "id": "okio-fakefilesystem",
    "name": "Okio FakeFileSystem",
    "group": "com.squareup.okio",
    "artifact": "okio-fakefilesystem",
    "stableVersion": "3.16.4",
    "latestVersion": "3.16.4",
    "description": "Testing filesystem for Okio",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm"
    ]
  },
  {
    "id": "atomicfu-lib",
    "name": "AtomicFU library",
    "group": "org.jetbrains.kotlinx",
    "artifact": "atomicfu",
    "stableVersion": "0.31.0",
    "latestVersion": "0.31.0",
    "description": "Atomic operations for Kotlin",
    "category": "Data",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js"
    ]
  },
  {
    "id": "junit",
    "name": "JUnit 4",
    "group": "junit",
    "artifact": "junit",
    "stableVersion": "4.13.2",
    "latestVersion": "4.13.2",
    "description": "Unit testing library",
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
    "id": "androidx-compose-ui-test-manifest",
    "name": "Compose UI Test Manifest",
    "group": "androidx.compose.ui",
    "artifact": "ui-test-manifest",
    "stableVersion": "1.10.4",
    "latestVersion": "1.11.0-alpha06",
    "description": "Manifest support for Compose testing",
    "category": "Testing",
    "managedBy": "androidx-compose-bom"
  },
  {
    "id": "androidx-test-monitor",
    "name": "AndroidX Test Monitor",
    "group": "androidx.test",
    "artifact": "monitor",
    "stableVersion": "1.8.0",
    "latestVersion": "1.9.0-alpha01",
    "description": "Test monitor",
    "category": "Testing"
  },
  {
    "id": "androidx-test-uiautomator",
    "name": "UI Automator",
    "group": "androidx.test.uiautomator",
    "artifact": "uiautomator",
    "stableVersion": "2.3.0",
    "latestVersion": "2.4.0-beta01",
    "description": "UI testing for Android apps",
    "category": "Testing"
  },
  {
    "id": "androidx-benchmark-macro",
    "name": "Benchmark Macro JUnit4",
    "group": "androidx.benchmark",
    "artifact": "benchmark-macro-junit4",
    "stableVersion": "1.4.1",
    "latestVersion": "1.5.0-alpha03",
    "description": "Macrobenchmark for Android",
    "category": "Testing"
  },
  {
    "id": "androidx-profileinstaller",
    "name": "ProfileInstaller",
    "group": "androidx.profileinstaller",
    "artifact": "profileinstaller",
    "stableVersion": "1.4.1",
    "latestVersion": "1.4.1",
    "description": "Baseline profile installation",
    "category": "Core"
  },
  {
    "id": "robolectric",
    "name": "Robolectric",
    "group": "org.robolectric",
    "artifact": "robolectric",
    "stableVersion": "4.16.1",
    "latestVersion": "4.16.1",
    "description": "Unit test framework for Android",
    "category": "Testing"
  },
  {
    "id": "roborazzi-core",
    "name": "Roborazzi",
    "group": "io.github.takahirom.roborazzi",
    "artifact": "roborazzi",
    "stableVersion": "1.59.0",
    "latestVersion": "1.59.0",
    "description": "Screenshot testing for Android",
    "category": "Testing"
  },
  {
    "id": "roborazzi-compose",
    "name": "Roborazzi Compose",
    "group": "io.github.takahirom.roborazzi",
    "artifact": "roborazzi-compose",
    "stableVersion": "1.59.0",
    "latestVersion": "1.59.0",
    "description": "Roborazzi Compose integration",
    "category": "Testing"
  },
  {
    "id": "roborazzi-junit",
    "name": "Roborazzi JUnit Rule",
    "group": "io.github.takahirom.roborazzi",
    "artifact": "roborazzi-junit-rule",
    "stableVersion": "1.59.0",
    "latestVersion": "1.59.0",
    "description": "JUnit rule for Roborazzi",
    "category": "Testing"
  },
  {
    "id": "turbine",
    "name": "Turbine",
    "group": "app.cash.turbine",
    "artifact": "turbine",
    "stableVersion": "1.2.1",
    "latestVersion": "1.2.1",
    "description": "Small testing library for Kotlin Flows",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js"
    ]
  },
  {
    "id": "assertk",
    "name": "AssertK",
    "group": "com.willowtreeapps.assertk",
    "artifact": "assertk",
    "stableVersion": "0.28.1",
    "latestVersion": "0.28.1",
    "description": "Fluent assertions for Kotlin",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js"
    ]
  },
  {
    "id": "test-parameter-injector",
    "name": "TestParameterInjector",
    "group": "com.google.testparameterinjector",
    "artifact": "test-parameter-injector",
    "stableVersion": "1.21",
    "latestVersion": "1.21",
    "description": "Parameterized tests for JUnit4",
    "category": "Testing"
  },
  {
    "id": "truth",
    "name": "Truth",
    "group": "com.google.truth",
    "artifact": "truth",
    "stableVersion": "1.4.5",
    "latestVersion": "1.4.5",
    "description": "Google fluent assertion library",
    "category": "Testing"
  },
  {
    "id": "kotlinpoet",
    "name": "KotlinPoet",
    "group": "com.squareup",
    "artifact": "kotlinpoet",
    "stableVersion": "2.2.0",
    "latestVersion": "2.2.0",
    "description": "Kotlin API for generating .kt source files",
    "category": "Utilities",
    "kmpPlatforms": [
      "jvm"
    ]
  },
  {
    "id": "kotlinpoet-ksp",
    "name": "KotlinPoet KSP",
    "group": "com.squareup",
    "artifact": "kotlinpoet-ksp",
    "stableVersion": "2.2.0",
    "latestVersion": "2.2.0",
    "description": "KSP support for KotlinPoet",
    "category": "Utilities",
    "kmpPlatforms": [
      "jvm"
    ]
  },
  {
    "id": "kct-core",
    "name": "Kotlin Compile Testing",
    "group": "dev.zacsweers.kctfork",
    "artifact": "core",
    "stableVersion": "0.12.1",
    "latestVersion": "0.12.1",
    "description": "Testing for Kotlin compilers",
    "category": "Testing"
  },
  {
    "id": "kct-ksp",
    "name": "Kotlin Compile Testing KSP",
    "group": "dev.zacsweers.kctfork",
    "artifact": "ksp",
    "stableVersion": "0.12.1",
    "latestVersion": "0.12.1",
    "description": "KSP support for KCT",
    "category": "Testing"
  },
  {
    "id": "ktfmt",
    "name": "Ktfmt",
    "group": "com.facebook",
    "artifact": "ktfmt",
    "stableVersion": "0.61",
    "latestVersion": "0.61",
    "description": "Deterministic Kotlin formatter",
    "category": "Utilities"
  },
  {
    "id": "auto-service-annotations",
    "name": "AutoService Annotations",
    "group": "com.google.auto.service",
    "artifact": "auto-service-annotations",
    "stableVersion": "1.1.1",
    "latestVersion": "1.1.1",
    "description": "Automatic service provider generation",
    "category": "Utilities"
  },
  {
    "id": "auto-service-ksp",
    "name": "AutoService KSP",
    "group": "dev.zacsweers.autoservice",
    "artifact": "auto-service-ksp",
    "stableVersion": "1.2.0",
    "latestVersion": "1.2.0",
    "description": "KSP version of AutoService",
    "category": "Utilities"
  },
  {
    "id": "leakcanary",
    "name": "LeakCanary",
    "group": "com.squareup.leakcanary",
    "artifact": "leakcanary-android",
    "stableVersion": "2.14",
    "latestVersion": "3.0-alpha-8",
    "description": "Memory leak detection for Android",
    "category": "Utilities"
  },
  {
    "id": "kotlin-bom",
    "name": "Kotlin BOM",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-bom",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Bill of Materials",
    "category": "Utilities"
  },
  {
    "id": "kotlin-test",
    "name": "Kotlin Test",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-test",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin test library",
    "category": "Testing",
    "kmpPlatforms": [
      "android",
      "ios",
      "jvm",
      "js"
    ]
  },
  {
    "id": "rxjava3",
    "name": "RXJava 3",
    "group": "io.reactivex.rxjava3",
    "artifact": "rxjava",
    "stableVersion": "3.1.12",
    "latestVersion": "3.1.12",
    "description": "Reactive extensions for the JVM",
    "category": "Networking"
  }
];

export const PLUGINS: Plugin[] = [
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
    "id": "android-library",
    "name": "Android Library",
    "pluginId": "com.android.library",
    "group": "com.android.tools.build",
    "artifact": "gradle",
    "stableVersion": "2.3.0",
    "latestVersion": "2.3.0",
    "description": "AGP Library Plugin",
    "category": "Build Tool"
  },
  {
    "id": "android-test",
    "name": "Android Test",
    "pluginId": "com.android.test",
    "group": "com.android.tools.build",
    "artifact": "gradle",
    "stableVersion": "2.3.0",
    "latestVersion": "2.3.0",
    "description": "AGP Test Plugin",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-android",
    "name": "Kotlin Android",
    "pluginId": "org.jetbrains.kotlin.android",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Android plugin",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-multiplatform",
    "name": "Kotlin Multiplatform",
    "pluginId": "org.jetbrains.kotlin.multiplatform",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "KMP plugin",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-jvm",
    "name": "Kotlin JVM",
    "pluginId": "org.jetbrains.kotlin.jvm",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin JVM plugin",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-kapt",
    "name": "Kotlin Kapt",
    "pluginId": "org.jetbrains.kotlin.kapt",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Kapt plugin",
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
    "id": "maven-publish",
    "name": "Maven Publish (Vannik)",
    "pluginId": "com.vanniktech.maven.publish",
    "group": "com.vanniktech",
    "artifact": "gradle-maven-publish-plugin",
    "stableVersion": "0.36.0",
    "latestVersion": "0.36.0",
    "description": "Publication utility",
    "category": "Build Tool"
  },
  {
    "id": "spotless",
    "name": "Spotless",
    "pluginId": "com.diffplug.spotless",
    "group": "com.diffplug.spotless",
    "artifact": "spotless-plugin-gradle",
    "stableVersion": "8.3.0",
    "latestVersion": "8.3.0",
    "description": "Code formatter",
    "category": "Build Tool"
  },
  {
    "id": "emulator-wtf",
    "name": "Emulator.wtf",
    "pluginId": "wtf.emulator.gradle",
    "group": "wtf.emulator",
    "artifact": "gradle-plugin",
    "stableVersion": "1.5.0",
    "latestVersion": "1.5.0",
    "description": "Cloud emulator testing",
    "category": "Build Tool"
  },
  {
    "id": "dependency-guard",
    "name": "Dependency Guard",
    "pluginId": "com.dropbox.dependency-guard",
    "group": "com.dropbox.dependency-guard",
    "artifact": "dependency-guard",
    "stableVersion": "0.5.0",
    "latestVersion": "0.5.0",
    "description": "Dependency tracking",
    "category": "Build Tool"
  },
  {
    "id": "kotlin-plugin-compose",
    "name": "Compose Compiler",
    "pluginId": "org.jetbrains.kotlin.plugin.compose",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-stdlib",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Kotlin Compose Plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "kotlin-plugin-serialization",
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
    "id": "kotlin-plugin-parcelize",
    "name": "Kotlin Parcelize",
    "pluginId": "org.jetbrains.kotlin.plugin.parcelize",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "Parcelize support",
    "category": "Compiler Plugin"
  },
  {
    "id": "kotlin-atomicfu",
    "name": "AtomicFU Plugin",
    "pluginId": "org.jetbrains.kotlin.plugin.atomicfu",
    "group": "org.jetbrains.kotlin",
    "artifact": "kotlin-gradle-plugin",
    "stableVersion": "2.3.10",
    "latestVersion": "2.3.20-RC2",
    "description": "AtomicFU compiler plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "jb-compose-plugin",
    "name": "JB Compose",
    "pluginId": "org.jetbrains.compose",
    "group": "org.jetbrains.compose",
    "artifact": "compose-gradle-plugin",
    "stableVersion": "1.10.2",
    "latestVersion": "1.11.0-alpha03",
    "description": "JetBrains Compose plugin",
    "category": "Compiler Plugin"
  },
  {
    "id": "anvil",
    "name": "Anvil",
    "pluginId": "dev.zacsweers.anvil",
    "group": "dev.zacsweers.anvil",
    "artifact": "gradle-plugin",
    "stableVersion": "0.5.3",
    "latestVersion": "0.5.3",
    "description": "Dagger factory generation",
    "category": "Compiler Plugin"
  },
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
    "id": "native-coroutines",
    "name": "Native Coroutines",
    "pluginId": "com.rickclephas.kmp.nativecoroutines",
    "group": "com.rickclephas.kmp",
    "artifact": "kmp-nativecoroutines-gradle-plugin",
    "stableVersion": "1.0.1",
    "latestVersion": "1.0.1-kotlin-2.3.20-RC",
    "description": "KMP Coroutines for Swift",
    "category": "Compiler Plugin"
  },
  {
    "id": "sqldelight",
    "name": "SQLDelight Plugin",
    "pluginId": "app.cash.sqldelight",
    "group": "app.cash.sqldelight",
    "artifact": "gradle-plugin",
    "stableVersion": "2.2.1",
    "latestVersion": "2.2.1",
    "description": "SQLDelight generation",
    "category": "Build Tool"
  },
  {
    "id": "detekt",
    "name": "Detekt",
    "pluginId": "io.gitlab.arturbosch.detekt",
    "group": "io.gitlab.arturbosch.detekt",
    "artifact": "detekt-gradle-plugin",
    "stableVersion": "1.23.8",
    "latestVersion": "1.23.8",
    "description": "Kotlin static analysis",
    "category": "Analysis"
  },
  {
    "id": "dokka",
    "name": "Dokka",
    "pluginId": "org.jetbrains.dokka",
    "group": "org.jetbrains.dokka",
    "artifact": "dokka-gradle-plugin",
    "stableVersion": "2.1.0",
    "latestVersion": "2.2.0-Beta",
    "description": "Kotlin documentation tool",
    "category": "Analysis"
  },
  {
    "id": "binary-compatibility",
    "name": "Binary Compatibility Validator",
    "pluginId": "org.jetbrains.kotlinx.binary-compatibility-validator",
    "group": "org.jetbrains.kotlinx",
    "artifact": "binary-compatibility-validator",
    "stableVersion": "0.18.1",
    "latestVersion": "0.18.1",
    "description": "BCV for Kotlin libraries",
    "category": "Analysis"
  },
  {
    "id": "roborazzi",
    "name": "Roborazzi Plugin",
    "pluginId": "io.github.takahirom.roborazzi",
    "group": "io.github.takahirom.roborazzi",
    "artifact": "roborazzi-gradle-plugin",
    "stableVersion": "1.59.0",
    "latestVersion": "1.59.0",
    "description": "Roborazzi plugin",
    "category": "Testing"
  },
  {
    "id": "baseline-profile",
    "name": "Baseline Profile",
    "pluginId": "androidx.baselineprofile",
    "group": "androidx.baselineprofile",
    "artifact": "androidx.baselineprofile.gradle.plugin",
    "stableVersion": "1.4.1",
    "latestVersion": "1.5.0-alpha03",
    "description": "Baseline profiles generator",
    "category": "Build Tool"
  }
];
