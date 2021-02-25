module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-duplicate-props': [0, { ignoreCase: true }],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'import/extensions': ['warn', 'never'],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [['/^react$/', '/^react/'], '/^@/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
