const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/#/login?_k=67gvub',
    setupNodeEvents(on, config) {
    }
  }
});
