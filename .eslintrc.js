module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'default-param-last': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': 0,
    'no-alert': 0,
    'max-len': 0,
  },
}
