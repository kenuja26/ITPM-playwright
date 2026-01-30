const { generateMarkdown } = require('./results-logger-v2');

class CustomReporter {
  onEnd(result) {
    generateMarkdown();
  }
}

module.exports = CustomReporter;
