# QA Automation Task – SauceDemo

## Objective
This project demonstrates QA automation fundamentals by creating an automated test suite for a public demo website using Cypress.

Website tested: https://www.saucedemo.com/


## Framework & Tools Used
- Automation Framework: Cypress
- Language: JavaScript
- Test Runner: Cypress Test Runner
- Browser: Chrome (default)
- OS: Windows



## Automated Test Cases

### 1. Successful Login Test
- Login with valid credentials
- Verify user is redirected to Products page

### 2. Failed Login Test
- Login with invalid credentials
- Verify appropriate error message is displayed

### 3. Add Product to Cart Test
- Login with valid credentials
- Add a product to cart
- Verify cart badge count

### 4. Checkout Product Test
- Login
- Add product to cart
- Complete checkout process
- Verify order success message


## Project Structure
```
Q A- Task final/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD workflows
├── cypress/
│   ├── e2e/                # End-to-end test files
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   └── login.cy.js
│   ├── fixtures/           # Test data and mock files
│   ├── support/            # Custom commands and configurations
│   │   ├── commands.js     # Custom Cypress commands
│   │   └── e2e.js          # Support file for e2e tests
│   └── videos/             # Recorded test execution videos
│       ├── cart.cy.js.mp4
│       ├── checkout.cy.js.mp4
│       └── login.cy.js.mp4
├── node_modules/           # Project dependencies
├── .gitignore              # Git ignore rules
├── cypress.config.js       # Cypress configuration
├── package-lock.json       # Locked dependency versions
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```
