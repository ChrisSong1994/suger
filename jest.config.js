const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.js$'
module.exports = {
  testRegex: TEST_REGEX,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
