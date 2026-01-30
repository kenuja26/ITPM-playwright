const { expect } = require('@playwright/test');

async function typeAndConvert(page, text) {
  const inputBox = page.locator('textarea');
  await inputBox.click();
  
  // Clear any existing text first
  await inputBox.clear();
  
  // Type the text with a delay to allow conversion
  await inputBox.type(text, { delay: 100 });
  
  // Press space to trigger conversion
  await inputBox.press(' ');
  
  // Wait longer for conversion to complete
  await page.waitForTimeout(1000);
  
  // Press backspace to remove the extra space
  await inputBox.press('Backspace');
  
  // Wait a bit more to ensure final conversion is done
  await page.waitForTimeout(500);
  
  return await inputBox.inputValue();
}

module.exports = { typeAndConvert };
