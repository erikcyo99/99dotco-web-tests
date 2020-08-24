# Cypress Website E2E Testing

[![Build Status]()]()
[![codecov]()]()

This repo is created to provide automated E2E testing for 99 group website. 
The end goals of this repo is to detect bugs and error more faster when deploy.

## Requirements

- [NodeJs](https://nodejs.org/en/download/) 
- [npm](https://www.npmjs.com/get-npm)

## Directory Structure

We follow [this layout](https://github.com/TheBrainFamily/cypress-cucumber-example) to build this repo. If anyone feels current structure is far from good, feel free to correct us.

```
├── cypress/
│   ├── fixtures/
│   │   ├── test_data
│   |   |    └── ... < market folder >
│   |   |        └── ... < market environtment config *.json >
│   ├── integration/
│   |   |    └── ... < market folder >
│   |   |        └── ... < market testcase with gherkin *.feature >
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── page_objects/
│       |    └── basepage.js
│       ├── step_definitions/
│       |    └── ... < file js as glue *.feature >
│       ├── commands.js
│       └── index.js
├── .gitignore
├── cypress.json
├── package-lock.json
├── package.json
└── README.md
```

## How to start instalation

1. Install all requirements, include for dev.
2. Open console and go to 99dotco-web-tests folder, and execute
   ```sh
   npm install
   ```

## How to run

Example running via test runner :
```sh
npm run prod:rumah123:debug
```

Example running without test runner :
```sh
npm run prod:rumah123
```

feel free to modify the repo or suggest us for more better code pattern.