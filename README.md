# ts-lib-starter

Boilerplate for your next TypeScript library. Build with speed and efficiency.

# Features

## [pnpm](https://pnpm.io/)

A fast and efficient package manager. Packages are linked from a single, global store.

## [tsup](https://tsup.egoist.sh/)

A quick, easy-to-use, and zero config bundler powered by esbuild. This allows for dual publishing esmodules and commonjs. It also produces only one dts file for each entrypoint.

## [Jest](https://jestjs.io/)

A testing framework. Uses [swc](https://swc.rs/) for transpiling TypeScript, look through the swc docs if you need to add features to the transpiler such as jsx.

## [Prettier](https://prettier.io/)

An opinionated code formatter that supports many languages.

## [xo](https://github.com/xojs/xo)

An opinionated ESLint wrapper that "just works."

## [npm-run-all](https://github.com/mysticatea/npm-run-all)

Run Prettier checks, TypeScript checks, and xo in parallel.

## [Github Actions](https://github.com/features/actions)

Run all your checks on each commit.

## pre-commit hook

Uses [husky](https://typicode.github.io/husky/#/) to register a pre-commit hook and [lint-staged](https://github.com/okonet/lint-staged) to run commands only on cpnpm i
hanged files.

Ensure all files are formatted before they are committed and run linters on changed files.

## [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/)

Automatically opens PRs to update dependencies. Automerges patch and minor updates, but not major updates or any `typescript` updates. Also pins all `devDependencies`) to use exact versions (**no** `^` before version signifying that the latest patch version can be matched, only the version specified can be used).

# Usage

This is esm-first, meaning you write esm and it is transpiled to both esm and cjs. For example, use:

```ts
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

instead of `__dirname`. This is necessary as xo will error on non-esm code and Jest uses the `--experimental-vm-modules` flag, so nothing from cjs will be defined.

1. [Install pnpm](https://pnpm.io/installation)

2. [Grant Renovate access to your GitHub repos](https://github.com/marketplace/renovate)

3. Copy the repo, replace `mypackage` with your repository name:

```
pnpx degit sachinraja/ts-lib-starter mypackage && cd mypackage
```

4. Search and replace all instances of `ts-lib-starter` with your package name. Remove `LICENSE` or replace it with your own.

5. Install dependencies:

```
pnpm i
```

6. Lint package:

```
pnpm lint
```

7. Test package:

```
pnpm t
```

Note that there is a workflow in `.github/workflows/test.yml` that will run on each commit if you push it to GitHub.
