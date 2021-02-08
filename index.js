module.exports = {
  plugins: ['@typescript-eslint', 'no-only-tests', 'prettier'],
  extends: [
    '@vue/standard',
    '@vue/typescript',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue',
  ],
  settings: {
    'import/internal-regex': '^(@|.|..)/',
    'import/ignore': ['node_modules'],
  },
  rules: {
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true,
        ignorePattern: 'tslint|webpackChunkName|[a-z]+[A-Z]+[a-z]+',
      },
    ],
    'eqeqeq': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'unknown'],
        pathGroups: [
          {
            pattern: '@/less/**',
            group: 'unknown',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'no-console': ['error', { allow: ['info', 'error', 'warn'] }],
    'no-debugger': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-redeclare': 'off',
    'no-restricted-syntax': ['error', 'CallExpression[callee.name="Error"]'],
    'no-unused-vars': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        quoteProps: 'consistent',
      },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/html-self-closing': ['error', { html: { void: 'any' } }],
    'vue/no-static-inline-styles': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
  },
  overrides: [
    {
      files: '*.js',
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}