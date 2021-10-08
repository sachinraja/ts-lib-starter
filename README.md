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

# Setup

Install dependencies:

```
pnpm i
```

Lint package:

```
pnpm lint
```

Will run all linters in parallel.
