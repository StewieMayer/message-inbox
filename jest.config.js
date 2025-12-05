module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
  transform: {
    '^.+\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    '^.+\.(js|jsx)$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
}
