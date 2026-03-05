# tomlify 🚀

The super-fast Android dependency catalog (`libs.versions.toml`) generator.

Built with **Astro**, **React**, and a lot of Kotlin love.

## Features ✨

- **Automated Versions**: Every Monday, a GitHub Action fetches the absolute latest versions from Google Maven and Maven Central.
- **Stable vs. Latest**: Toggle between true stable releases and bleeding-edge previews (alpha/beta/rc).
- **KMP Ready**: Filter for Kotlin Multiplatform compatible libraries with platform tags.
- **Smart Plugins**: Handles Gradle plugins and KSP processors with correct ID-to-Maven mappings.
- **Search & Filter**: Find exactly what you need in seconds.
- **Copy-Paste Ready**: One click to get your perfectly formatted TOML.

## Live Demo 🌍

[https://bwever.github.io/tomlify/](https://bwever.github.io/tomlify/)

## How it works 🛠️

1. **`src/data/libraries.ts`**: The source of truth for the library and plugin catalog.
2. **`scripts/fetch-versions.ts`**: A build-time script that crawls Maven repositories to find the latest stable and preview versions.
3. **GitHub Actions**: Automatically runs the fetcher and deploys a fresh static site every week.

## Contributing 🤝

Want to add a library? 
- Open an issue using the "+ Request more" link on the site.
- Or submit a PR updating `src/data/libraries.ts`.

## Tech Stack 💻

- [Astro](https://astro.build/) - Static Site Generation
- [React](https://reactjs.org/) - Interactive UI
- [tsx](https://github.com/privatenumber/tsx) - Script execution
- [GitHub Actions](https://github.com/features/actions) - Automation & Deployment
