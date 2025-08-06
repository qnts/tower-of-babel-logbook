/** @type { import("eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 0,
    'prettier/prettier': 'warn',
    'react/self-closing-comp': 'warn',
    'react/destructuring-assignment': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/order': 0,
    'import/prefer-default-export': 'warn',
    'react/jsx-no-constructed-context-values': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
