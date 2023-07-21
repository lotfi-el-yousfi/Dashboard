module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/*.spec.js"],
  setupFilesAfterEnv: ["./tests/setup.js"],
};
