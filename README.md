# Cypress saucedemo e2e automation

## Description
Cypress project to write automated tests for https://www.saucedemo.com/

## Installation
1. Fork your own copy of this repository
2. ```git clone``` your copy of the repository

## Running
1. Install cypress by typing ```npm install cypress --save-dev``` in console
2. Open cypress ```npx cypress open```

Make sure you have Node.js installed and that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.


## Attention
When running tests on the https://www.saucedemo.com/ for the second time, you may encounter next error:
```
CypressError: Timed out after waiting '60000ms' for your remote page to load.
Your page did not fire its 'load' event within '60000ms'.
```
Discussion thread: https://github.com/cypress-io/cypress/issues/27501

Possible solution: https://github.com/cypress-io/cypress/issues/27501#issuecomment-1722403606

