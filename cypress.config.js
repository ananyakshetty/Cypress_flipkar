const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ttpvkk',
  chromeWebSecurity: false,
  uncaught: 'exception',
  defaultCommandTimeout: 10000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
    allureReuseAfterSpec: true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      allureWriter(on, config);
      return config
    },
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    specPattern: 'cypress/e2e/**/*.js'
  }, "compilerOptions": {
    "allowJs": true,
    "baseUrl": "./",
    "types": ["@shelex/cypress-allure-plugin"],
    "noEmit": true
  }
})
