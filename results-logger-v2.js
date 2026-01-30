const fs = require('fs');
const path = require('path');

const TEMP_FILE = path.join(__dirname, 'output', '.test-results.json');

function addResult(testId, input, expectedOutput, actualOutput, status) {
  // Ensure directory exists
  const dir = path.dirname(TEMP_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Read existing results
  let results = [];
  if (fs.existsSync(TEMP_FILE)) {
    try {
      const data = fs.readFileSync(TEMP_FILE, 'utf8');
      results = JSON.parse(data);
    } catch (e) {
      results = [];
    }
  }

  // Add new result
  results.push({ testId, input, expectedOutput, actualOutput, status });

  // Write back
  fs.writeFileSync(TEMP_FILE, JSON.stringify(results, null, 2), 'utf8');
}

function generateMarkdown() {
  if (!fs.existsSync(TEMP_FILE)) {
    console.log('No results file found');
    return;
  }

  // Read results
  const data = fs.readFileSync(TEMP_FILE, 'utf8');
  const results = JSON.parse(data);

  if (results.length === 0) {
    return;
  }

  // Sort results by test ID
  results.sort((a, b) => {
    // Extract type and number from test IDs like "Pos_Fun_0001", "Neg_Fun_0001", "Pos_UI_0001"
    const extractParts = (id) => {
      const match = id.match(/(Pos|Neg)_(Fun|UI)_(\d+)/);
      if (match) {
        return {
          type: match[1],  // Pos or Neg
          category: match[2],  // Fun or UI
          number: parseInt(match[3])
        };
      }
      return { type: '', category: '', number: 0 };
    };
    
    const partsA = extractParts(a.testId);
    const partsB = extractParts(b.testId);
    
    // Sort by: type (Pos first), then category (Fun first), then number
    if (partsA.type !== partsB.type) {
      return partsA.type === 'Pos' ? -1 : 1;
    }
    if (partsA.category !== partsB.category) {
      return partsA.category === 'Fun' ? -1 : 1;
    }
    return partsA.number - partsB.number;
  });

  const outputDir = path.dirname(TEMP_FILE);

  // Use single result file that gets updated each time
  const fileName = 'result.md';
  const filePath = path.join(outputDir, fileName);

  // Generate markdown content
  let markdown = '# 🧪 Test Results Report\n\n';
  markdown += `📅 **Date:** ${new Date().toLocaleString()}\n\n`;
  markdown += `📊 **Summary:**\n`;
  markdown += `- Total Tests: ${results.length}\n`;
  markdown += `- ✅ Passed: ${results.filter(r => r.status === 'PASS').length}\n`;
  markdown += `- ❌ Failed: ${results.filter(r => r.status === 'FAIL').length}\n\n`;
  markdown += '---\n\n';

  results.forEach((result, index) => {
    const statusIcon = result.status === 'PASS' ? '✅' : '❌';
    markdown += `## ${index + 1}. ${statusIcon} ${result.testId}\n\n`;
    markdown += `📝 Input: ${result.input}\n\n`;
    markdown += `🎯 Expected Output: ${result.expectedOutput}\n\n`;
    markdown += `💡 Actual Output: ${result.actualOutput}\n\n`;
    markdown += `Result: ${statusIcon} ${result.status}\n\n`;
    markdown += '---\n\n';
  });

  // Write to file
  fs.writeFileSync(filePath, markdown, 'utf8');
  console.log(`\n✅ Results saved to: output/${fileName}\n`);

  // Delete temp file
  fs.unlinkSync(TEMP_FILE);

  return filePath;
}

module.exports = { addResult, generateMarkdown };