module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:react-native/all',
    'universe/native',
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '_',
      },
    },
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'react-native/no-unused-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
