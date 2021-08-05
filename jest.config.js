module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/testSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
};
