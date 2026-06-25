# Playwright E2E Test Portfolio

Automated end-to-end test suite for [SauceDemo](https://www.saucedemo.com) built with Playwright and TypeScript.

![Playwright Tests](https://github.com/yhttps://github.com/simzacpt025-crypto/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **CI/CD:** GitHub Actions
- **Pattern:** Page Object Model (POM)
- **Browsers:** Chromium (configurable for Firefox and WebKit)

## What This Tests

| Area | Tests | What It Verifies |
|------|-------|------------------|
| Login | 3 tests | Successful login, locked-out user error, invalid credentials error |
| Products | 4 tests | Page title, inventory display, add-to-cart, sort functionality |

## Project Structure

```
playwright-portfolio/
├── .github/workflows/   # GitHub Actions CI configuration
├── pages/               # Page Object Model classes
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/               # Test specifications
│   ├── login.spec.ts
│   └── products.spec.ts
├── playwright.config.ts # Playwright configuration
└── README.md
```

## Running Locally

```bash
npm ci
npx playwright install
npx playwright test
npx playwright test --headed
npx playwright show-report
```

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions. The HTML report is uploaded as an artifact on each run.