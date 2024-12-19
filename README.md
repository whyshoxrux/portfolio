#
[![Netlify Status](https://api.netlify.com/api/v1/badges/00e6b328-c662-4885-80ef-6e22e920cf9c/deploy-status)](https://app.netlify.com/sites/talukdersoumen/deploys) 
#



<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://pr.new/vitejs/vite"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>


# Vite+React APP

### This is a Vite + React project with TailwindCSS integration. 
 
<br/>

# Installation

To use this project, you can either download the code or clone the repository using git:

```bash
git clone https://github.com/talukdersoumen/talukdersoumen.github.io.git
```

Then, navigate to the project directory and install the required dependencies using npm:

```bash
cd talukdersoumen.github.io
npm install
```

<br/>

# Usage

Once you have installed the dependencies, you can start the development server using the following command:

```bash
npm run dev
```

This will start the server at http://localhost:3000 and open your default browser.

To build the production-ready code, you can run:

```bash
npm run build
```

This will create a dist folder with your built code, which you can deploy to a server.

<br/>

# Features

This project comes with the following features out of the box:

 <li>React: a popular library for building user interfaces.</li>
 <li> Vite: a fast and minimalist build tool that is used to run the development server and build the project.</li>
 <li>TailwindCSS: a utility-first CSS framework that helps you quickly build custom designs.</li>
 <li>ESLint: a linter tool for identifying and reporting on patterns found in JavaScript code.</li>
 <li>Prettier: a code formatter that helps you maintain consistent code style.</li>

<br/>


# Folder structure

This project has the following folder structure:

```lua
├── .github
├── .vscode
├── dist
├── node_modules
├── public
│   ├── favicon.ico
│   └── robots.txt
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── babel-plugin-macros.config.js
├── babel.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

<li> public : contains the index.html file and any static assets (like images or fonts) that are used in the app. </li>
<li>  src: contains the React components and any other JavaScript or CSS files that make up the app.</li>
<li>  .eslintrc.js: contains the ESLint configuration for the project.</li>
<li>   .gitignore: specifies which files and directories should be ignored by Git.</li>
<li>   package.json: specifies the dependencies and scripts for the project.</li>
<li>  postcss.config.js: contains the PostCSS configuration for the project.</li>
<li>  README.md: this file.</li>
<li>  vite.config.js: contains the Vite configuration for the project.</li>

<br/>

# Contributing

Contributions are always welcome! If you have any suggestions, bug reports, or pull requests, please open an issue or a pull request on GitHub.

<br/>

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).

## Packages

| Package                                         | Version (click for changelogs)                                                                                                    |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsors

<p align="center">
  <a target="_blank" href="https://github.com/sponsors/yyx990803">
    <img alt="sponsors" src="https://sponsors.vuejs.org/vite.svg">
  </a>
</p>
