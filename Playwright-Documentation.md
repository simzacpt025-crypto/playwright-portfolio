# Playwright E2E Test Portfolio

A professional end-to-end (E2E) test automation project built with **Playwright** and **TypeScript**. This project demonstrates modern QA engineering practices, including automated UI testing, the Page Object Model (POM), and Continuous Integration (CI) using GitHub Actions.

> **Author:** Simphiwe Mzazi  
> **Date:** June 2026

---

## Project Overview

This project showcases my ability to build and maintain automated end-to-end tests for a real-world e-commerce application using Playwright.

The objective was to create a reliable and maintainable test suite that validates critical user journeys while following industry best practices used by professional QA engineers.

---

## Project Goals

- Build a professional Playwright automation framework.
- Automate login and product functionality.
- Apply the Page Object Model (POM).
- Implement positive and negative test scenarios.
- Configure Continuous Integration using GitHub Actions.
- Publish the project on GitHub as part of my QA portfolio.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions
- Visual Studio Code

---

# Project Journey

## 1. Setting Up the Playwright Project

### Objective

Initialize a Playwright project and publish it to GitHub.

### What I Did

- Installed Playwright
- Configured the project structure
- Created the initial test suite
- Published the repository to GitHub

---

### Skills Learned

- Playwright project setup
- Package management
- Git version control
- Repository management

---

## 2. Writing Login Tests

### Objective

Create automated login tests covering both successful and unsuccessful authentication.

### Test Scenarios

 Successful login using a valid user

 Login blocked for a locked-out user

 Login fails with invalid credentials

### Why This Matters

Testing both positive and negative scenarios ensures that an application behaves correctly under expected and unexpected conditions.

It improves:

- Reliability
- User experience
- Error handling
- Application quality

---

## 3. Refactoring with the Page Object Model (POM)

### Objective

Improve the structure and maintainability of the test suite.

### What I Did

- Created a dedicated `LoginPage`
- Moved selectors into reusable page objects
- Refactored login tests
- Verified all tests continued to pass

### Benefits of POM

- Less duplicated code
- Easier maintenance
- Better readability
- Faster updates when UI changes

---

## 4. Testing Product Features

### Objective

Expand test coverage beyond authentication.

### Test Cases

### Product Page

- Verify the Products page loads successfully.

### Inventory

- Confirm inventory items are displayed.

### Shopping Cart

- Add the Sauce Labs Backpack to the cart.
- Verify the cart badge updates correctly.

### Product Sorting

- Sort products by **Price (Low to High)**.
- Verify the cheapest product appears first.

### Professional Practice

I used `test.beforeEach()` to log in before every test, keeping setup separate from assertions and ensuring each test remains isolated and repeatable.

---

## 5. Continuous Integration (CI)

### Objective

Automatically execute tests whenever code is pushed to GitHub.

### What I Configured

- GitHub Actions workflow
- Automatic Playwright test execution
- HTML report generation
- Continuous validation on every push

### Benefits

- Early bug detection
- Reliable builds
- Automated quality assurance
- Easier collaboration

---

# Key QA Concepts Demonstrated

- End-to-End Testing
- Test Automation
- Positive Testing
- Negative Testing
- Assertions
- Test Isolation
- Page Object Model (POM)
- Continuous Integration (CI)
- Maintainable Test Architecture

---

# Challenges

One of the biggest challenges was refactoring the tests into the Page Object Model.

Initially, moving locators and methods introduced bugs, but debugging these issues helped me better understand how Playwright structures reusable automation code and reinforced the importance of clean architecture.

---

# Key Takeaways

Through this project I learned:

- How to build a professional Playwright framework.
- How to automate realistic user workflows.
- How to write maintainable tests using the Page Object Model.
- How to structure automation projects for scalability.
- How to integrate GitHub Actions for Continuous Integration.
- How automated testing contributes to software quality and faster development cycles.

---

# Future Improvements

I plan to extend this project by adding:

- Cross-browser testing
- API testing
- Visual regression testing
- Data-driven testing
- Parallel execution
- Test reporting dashboards
- Docker support

---

# Repository

GitHub Repository:

**https://github.com/simzacpt025-crypto/playwright-portfolio**

---

# About Me

I'm an aspiring **Software QA Engineer** with interests in:

- Test Automation
- Software Testing
- Quality Assurance
- DevOps
- Cloud Computing
- Cybersecurity

I'm continuously building projects that demonstrate practical software engineering and testing skills while expanding my knowledge of modern QA tools and practices.

---

## If you found this project helpful, feel free to star the repository!
