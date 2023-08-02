import type {JestConfigWithTsJest} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage/',
  testPathIgnorePatterns: ['<rootDir>/src/index.tsx'], // fix
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        isolatedModules: true, // 2 fix dinamic import
      },
    ],
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '@mui/styled-engine': '<rootDir>/node_modules/@mui/styled-engine-sc',
    uuid: require.resolve('uuid'),
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};

export default jestConfig;
