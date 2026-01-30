# ITPM Assignment 1 – Option 2

## Description
Automated testing of Thanglish to Tamil transliteration using Playwright.

**Website:** https://tamil.changathi.com/

**Test Coverage:**
- 10 Positive Functional test cases
- 10 Negative Functional test cases
- 1 UI test case

## Prerequisites
- Node.js installed
- Windows OS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Run Tests

Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test tests/positive-functional.spec.js
npx playwright test tests/negative-functional.spec.js
npx playwright test tests/ui.spec.js
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

View HTML test report:
```bash
npx playwright show-report
```

## Test Results

After each test run:
- ✅ Automated markdown report generated in `output/` folder
- 📄 Results saved as `result001.md`, `result002.md`, etc.
- 📊 Each report contains test ID, input, expected output, actual output, and status
- 🎯 Sorted by test type and number for easy reading

## Project Structure

```
Playwright/
│
├── tests/
│   ├── positive-functional.spec.js  (24 test cases)
│   ├── negative-functional.spec.js  (10 test cases)
│   └── ui.spec.js                   (1 test case)
│
├── output/                          (Auto-generated test results)
│   ├── result001.md
│   ├── result002.md
│   └── ...
│
├── helper.js
├── results-logger-v2.js            (Results logging system)
├── custom-reporter.js              (Playwright reporter)
├── playwright.config.js
├── package.json
├── README.md
└── .gitignore
```

## Test Approach

- Uses `type()` method with delay for real-time conversion
- Waits for conversion to complete
- Compares actual output with expected Tamil text
- Reports PASS/FAIL automatically
- Generates user-friendly markdown reports with emojis
- Supports parallel test execution
- Results automatically sorted by test ID

## Features

✅ 35 automated test cases (24 positive, 10 negative, 1 UI)  
✅ Real-time conversion testing  
✅ Automatic result comparison  
✅ Markdown report generation with emojis  
✅ HTML test report with detailed logs  
✅ Sequential result numbering (result001, result002, ...)  
✅ Clean and organized output format

## Author
IT23611610 Kenuja S
