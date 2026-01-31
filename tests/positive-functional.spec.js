const { test, expect } = require('@playwright/test');
const { typeAndConvert } = require('../helper');
const { addResult } = require('../results-logger-v2');

test('Pos_Fun_0001 - Check extra space ', async ({ page }) => {
  const input = 'naanum   ammaavum madhiyam samaikkiroam.';
  const expected = 'நானும்   அம்மாவும் மதியம் சமைக்கிறோம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0001', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0001', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0002 - lower and upper case', async ({ page }) => {
  const input = 'epPo vAruVai';
  const expected = 'எப்போ வருவாய்';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0002', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0002', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0003 - place', async ({ page }) => {
  const input = 'naan netru vavuniyaakku ponaen.';
  const expected = 'நான் நேற்று வவுனியாக்கு போனேன்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0003', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0003', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0004 - punctuation mark', async ({ page }) => {
  const input = 'satham podaadhe! ';
  const expected = 'சத்தம் போடாதே! ';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0004', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0004', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0005 - capitalization each word', async ({ page }) => {
  const input = 'Ennaiyum Kootikkondu Poreengealaa?';
  const expected = 'என்னையும் கூட்டிக்கொண்டு போறீங்களா?';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0005', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0005', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0006 - emoji', async ({ page }) => {
  const input = 'naangal eppo povom 😉';
  const expected = 'நாங்கள் எப்போ போவோம் 😉';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0006', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0006', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0007 - single code', async ({ page }) => {
  const input = '"naalaikku niraya velai irukkum"';
  const expected = '"நாளைக்கு நிறைய வேலை இருக்கும்"';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0007', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0007', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0008 - Compound', async ({ page }) => {
  const input = 'naanum nanbargalum vakuppirkku poyittu saappida povom.';
  const expected = 'நானும் நண்பர்களும் வகுப்பிற்கு போயிட்டு சாப்பிட போவோம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0008', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0008', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0009 - Greetings', async ({ page }) => {
  const input = 'iniya pongal vaalthukkal!';
  const expected = 'இனிய பொங்கல் வாழ்த்துக்கள்!';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0009', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0009', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0010 - Sentence with punctuation', async ({ page }) => {
  const input = 'vaendam niruththungal!';
  const expected = 'வேண்டாம் நிறுத்துங்கள்!';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0010', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0010', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0011 - Response Sentence', async ({ page }) => {
  const input = 'naan velaiya neraththukku mudippen.';
  const expected = 'நான் வேலைய நேரத்துக்கு முடிப்பேன்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0011', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0011', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0012 - Informal Sentence', async ({ page }) => {
  const input = 'sari vidu machaan paaththukkalaam.';
  const expected = 'சரி விடு மச்சான் பாத்துக்கலாம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0012', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0012', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0013 - day-to-day expressions', async ({ page }) => {
  const input = 'seekkiram mudichittu vaa polam,neram illai.';
  const expected = 'சீக்கிரம் முடிச்சிட்டு வா போலாம்,நேரம் இல்லை.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0013', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0013', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0014 - Casual Polite Sentence', async ({ page }) => {
  const input = 'indha pirachanaiyai konjam kavanikkavum!';
  const expected = 'இந்த பிரச்சனையை கொஞ்சம் கவனிக்கவும்!';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0014', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0014', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0015 - Singular Sentence', async ({ page }) => {
  const input = 'naan padikkiren.';
  const expected = 'நான் படிக்கிறேன்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0015', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0015', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0016 - Plural Sentence', async ({ page }) => {
  const input = 'naangal vilaiyaadugiroam.';
  const expected = 'நாங்கள் விளையாடுகிறோம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0016', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0016', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0017 - Negation Sentence', async ({ page }) => {
  const input = 'ennatta kaasu illai.';
  const expected = 'என்னட்ட காசு இல்லை.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0017', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0017', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0018 - Repeated Word Sentence', async ({ page }) => {
  const input = 'sollu sollu nee nallah sollu';
  const expected = 'சொல்லு சொல்லு நீ நல்லா சொல்லு';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0018', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0018', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0019 - Positive Sentence', async ({ page }) => {
  const input = 'naangal naalaikku varuvom.';
  const expected = 'நாங்கள் நாளைக்கு வருவோம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);
  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0019', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0019', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0020 - Negative Sentence', async ({ page }) => {
  const input = 'naangal naalaikku kaalai vakuppuku varamaattom,adshayaa veettai pirandhanaalukku pogamaattom.';
  const expected = 'நாங்கள் நாளைக்கு காலை வகுப்புக்கு வரமாட்டோம்,அட்ஷயா வீட்டை பிறந்தநாளுக்கு போகமாட்டோம்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);
  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0020', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0020', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0021 - Complex Sentence', async ({ page }) => {
  const input = 'aval velaiya seythu mudikkattum, piragu naan paakkiren';
  const expected = 'அவள் வேலைய செய்து முடிக்கட்டும், பிறகு நான் பாக்கிறேன்';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0021', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0021', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0022 - Interrogative(que) Sentence', async ({ page }) => {
  const input = 'avan naalaikku varuvaanaa?';
  const expected = 'அவன் நாளைக்கு வருவானா?';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0022', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0022', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0023 - Imperative Sentence', async ({ page }) => {
  const input = 'nee munnala vaa';
  const expected = 'நீ முன்னால வா';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0023', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0023', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Pos_Fun_0024 - upper case', async ({ page }) => {
  const input = 'APPAVODA VAARAN.';
  const expected = 'அப்பாவோட வாறன்.';
  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Pos_Fun_0024', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Pos_Fun_0024', input, expected, actual, 'FAIL');
    throw error;
  }
});

