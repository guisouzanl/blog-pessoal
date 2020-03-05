module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      {extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-a11y/anchor-has-content': 'off',
    'react/jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-a11y/control-has-associated-label': 'off'

  },
};
