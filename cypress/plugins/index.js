const cucumber = require("cypress-cucumber-preprocessor").default; // eslint-disable-line

const generateBaseUrl = (market, env) => {
  const marketBaseUrl = {
    "rumah123": {
      "stg": 'http://13.250.50.101:8000',
      "prod": 'https://www.rumah123.com'
    },
    "99id": {
      "stg": 'https://desktop.develop.portal.99iddev.net',
      "prod": 'https://www.99.co/id'
    }
  };
  return marketBaseUrl[market][env];
};

const generateFixtureFolder = market => {
  return 'cypress/fixtures/test_data/' + market;
};
const generateIntegrationFolder = market => {
  return 'cypress/integration/' + market;
};

const rebuildCypressConfig = (market, env) => {
  return {
    baseUrl: generateBaseUrl(market, env),
    fixturesFolder: generateFixtureFolder(market),
    integrationFolder: generateIntegrationFolder(market),
  };
};

module.exports = on => {
  const market = process.env.MARKET;
  const env = process.env.ENV;

  on("file:preprocessor", cucumber());
  
  return rebuildCypressConfig(market, env);
};
