module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '**/functions/*.js',
    '**/node_modules/',
    '**/__tests__/**/*.ts',
    '**/__tests__/**/*.tsx',
    '**/__mocks__/**/*.ts',
    '**/__mocks__/**/*.tsx',
  ],
  // Prettier plugin should be the last to always override preceding plugins
  extends: ['next', 'airbnb', 'plugin:cypress/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-jsx-a11y', 'cypress'],
  rules: {
    'function-call-argument-newline': ['off'],
    'function-paren-newline': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'newline-per-chained-call': ['off'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
    'no-misleading-character-class': ['off'],
    'no-nested-ternary': ['off'],
    'no-promise-executor-return': ['off'],
    'no-underscore-dangle': ['off'],
    'no-useless-escape': ['off'],
    'react/function-component-definition': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/require-default-props': ['off'],
    'react/no-danger': ['off'],
    '@next/next/no-html-link-for-pages': ['off'],
    '@next/next/no-img-element': ['off'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'next',
        'airbnb',
        'airbnb-typescript',
        'plugin:cypress/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint', 'eslint-plugin-jsx-a11y', 'cypress'],
      rules: {
        'import/prefer-default-export': ['off'],
        'import/extensions': ['warn'],
        'import/no-extraneous-dependencies': ['off'],
        'max-len': ['error', { code: 120 }],
        'no-misleading-character-class': ['off'],
        'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
        'no-nested-ternary': ['off'],
        'no-underscore-dangle': ['off'],
        'no-unused-vars': ['error'],
        'no-useless-escape': ['off'],
        'import/no-relative-packages': ['off'],
        'react/function-component-definition': ['off'],
        'react/require-default-props': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'react/no-unknown-property': ['off'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-empty-function': ['warn'],
        'prefer-const': 'error',
      },
    },
  ],
};
