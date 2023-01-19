module.exports = {
  errorOnDeprecated: true,
  maxWorkers: '100%',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  resetMocks: true,
};
