const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://example.cypress.io',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    }
})