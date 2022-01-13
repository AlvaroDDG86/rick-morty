module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  setupFilesAfterEnv: [
    "<rootDir>/tests/setupTest.js"
  ]
}
