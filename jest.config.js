const jestConfig = {
  transformIgnorePatterns: ['node_modules', 'dist'],
  transform: {
    '^.+\\.(j|t)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
        module: {
          type: 'commonjs',
        },
      },
    ],
  },
}

export default jestConfig
