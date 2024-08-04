module.exports = {
  preset: '@testing-library/react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforma arquivos TypeScript
    '^.+\\.jsx?$': 'babel-jest', // Usa babel-jest para arquivos JS e JSX
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native|@react-native|@react-native/js-polyfills)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensões de arquivos para o Jest reconhecer
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Adiciona matchers do testing-library/jest-native
};
