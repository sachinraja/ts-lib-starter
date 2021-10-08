# ts-lib-starter

Boilerplate for your next TypeScript library. Build with speed and efficiency.

# Features

## [pnpm](https://pnpm.io/)

A fast and efficient package manager. Packages are linked from a single, global store.

## [tsup](https://tsup.egoist.sh/)

A quick, easy-to-use, and zero config bundler powered by esbuild. This allows for dual publishing esmodules and commonjs. It also produces only one dts file for each entrypoint.

## [Prettier](https://prettier.io/)

An opinionated code formatter that supports many languages.

## [xo](https://github.com/xojs/xo)

An opinionated ESLint wrapper that "just works."

## [npm-run-all](https://github.com/mysticatea/npm-run-all)

Run Prettier checks, TypeScript checks, and xo in parallel.

## [Github Actions](https://github.com/features/actions)

Run all your checks on each commit.

## pre-commit hook

Uses [husky](https://typicode.github.io/husky/#/) to register a pre-commit hook and [lint-staged](https://github.com/okonet/lint-staged) to run commands only on changed files.

Ensure all files are formatted before they are committed and run linters on changed files.

# Usage

Search and replace all `ts-lib-starter` with your package name.

[Install pnpm globally.](https://pnpm.io/installation)

Install dependencies:

```
pnpm i
```

Lint package:

```
pnpm lint
```

Will run all linters in parallel.

Note that there is a workflow in `.github/workflows/test.yml` that will run on each commit if you push it to GitHub.
