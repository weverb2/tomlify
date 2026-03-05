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
    "id": "compose-bom",
    "name": "Compose BOM",
    "group": "androidx.compose",
    "artifact": "compose-bom",
    "version": "2026.02.01",
    "description": "Bill of Materials for Jetpack Compose libraries",
    "category": "Compose"
  },
  {
    "id": "compose-ui",
    "name": "Compose UI",
    "group": "androidx.compose.ui",
    "artifact": "ui",
    "version": "",
    "description": "Fundamental building blocks of Compose UI",
    "category": "Compose"
  },
  {
    "id": "compose-material3",
    "name": "Material 3",
    "group": "androidx.compose.material3",
    "artifact": "material3",
    "version": "",
    "description": "Material Design 3 components for Compose",
    "category": "Compose"
  },
  {
    "id": "compose-navigation",
    "name": "Navigation Compose",
    "group": "androidx.navigation",
    "artifact": "navigation-compose",
    "version": "2.9.7",
    "description": "Navigation component for Jetpack Compose",
    "category": "Architecture"
  },
  {
    "id": "hilt-android",
    "name": "Hilt Android",
    "group": "com.google.dagger",
    "artifact": "hilt-android",
    "version": "2.50",
    "description": "Dependency injection for Android",
    "category": "Architecture"
  },
  {
    "id": "retrofit",
    "name": "Retrofit",
    "group": "com.squareup.retrofit2",
    "artifact": "retrofit",
    "version": "3.0.0",
    "description": "A type-safe HTTP client for Android and Java",
    "category": "Networking"
  },
  {
    "id": "okhttp",
    "name": "OkHttp",
    "group": "com.squareup.okhttp3",
    "artifact": "okhttp",
    "version": "5.3.2",
    "description": "An HTTP client for Android and Java applications",
    "category": "Networking"
  },
  {
    "id": "coil-compose",
    "name": "Coil Compose",
    "group": "io.coil-kt",
    "artifact": "coil-compose",
    "version": "2.7.0",
    "description": "An image loading library for Android backed by Kotlin Coroutines",
    "category": "UI"
  },
  {
    "id": "room-runtime",
    "name": "Room Runtime",
    "group": "androidx.room",
    "artifact": "room-runtime",
    "version": "2.8.4",
    "description": "Room persistence library",
    "category": "Architecture"
  },
  {
    "id": "kotlinx-serialization-json",
    "name": "Kotlinx Serialization JSON",
    "group": "org.jetbrains.kotlinx",
    "artifact": "kotlinx-serialization-json",
    "version": "1.10.0",
    "description": "Kotlin multiplatform / multi-format serialization",
    "category": "Utilities"
  },
  {
    "id": "timber",
    "name": "Timber",
    "group": "com.jakewharton.timber",
    "artifact": "timber",
    "version": "5.0.1",
    "description": "A logger with a small, extensible API",
    "category": "Utilities"
  },
  {
    "id": "junit",
    "name": "JUnit 4",
    "group": "junit",
    "artifact": "junit",
    "version": "4.13.2",
    "description": "A programmer-oriented testing framework for Java",
    "category": "Testing"
  },
  {
    "id": "androidx-test-ext-junit",
    "name": "AndroidX Test JUnit",
    "group": "androidx.test.ext",
    "artifact": "junit",
    "version": "1.3.0",
    "description": "AndroidX Test extensions for JUnit",
    "category": "Testing"
  },
  {
    "id": "espresso-core",
    "name": "Espresso Core",
    "group": "androidx.test.espresso",
    "artifact": "espresso-core",
    "version": "3.7.0",
    "description": "UI testing framework for Android",
    "category": "Testing"
  }
];
