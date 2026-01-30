const { test, expect } = require('@playwright/test');
const { typeAndConvert } = require('../helper');
const { addResult } = require('../results-logger-v2');

test('Neg_Fun_0001 - Joined words without spaces', async ({ page }) => {
  const input = 'aemaatravendaam';
  const expected = 'ஏமாற்ற வேண்டாம்';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0001', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0001', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0002 - Incorrect spelling', async ({ page }) => {
  const input = 'manavargalukkana mukiyamana thakaval';
  const expected = 'மாணவர்களுக்கான முக்கியமான தகவல் ';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0002', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0002', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0003 - Very long paragraph', async ({ page }) => {
  const input ='naanum adshayaa,sham,luxan,keerththi ellarum yesterday 50% offer kadaikku poiddu things vaangittu, enna seivam endu yosichuttu badham paal kudikka kadaikku ponaangal.anga pona kadai poottu engalukkoo thagam.vera vazhi illama innoru kadaikku ponanga aanaal angayum juice illai.naanga thirumbi uni vanthittam. piragu canteenla milk packet vaangi kudicham. athukku piragu naanga ITPM Assignment seiya thodankinaangal.but sentance thedi thedi aluththu pochchu piragu tea ,biscurt vaangi saappiddu veedda poittam.piragu nextday vanthu canteen la irunthu start panninanga time than poguthu,ippo seithu kondu than irunthu itha eluthuran eppidium indaikkulla oru mudivukku varuvam enru ninaikkiren.';
  const expected = 'நானும் adshaya,luxan,keerththi எல்லாரும் நேற்று 50% offer கடைக்கு போயிட்டு things வாங்கிட்டு, என்ன செய்வம் என்று யோசிச்சிட்டு badham பால் குடிக்க கடைக்கு போனங்கள்.அங்க போனா கடை பூட்டு எங்களுக்கூ தாகம்.வேற வழி இல்லாம இன்னொரு கடைக்கு போனாங்க ஆனால் அங்கையும் juice இல்லை. நாங்க திரும்பி uni வந்திட்டம். பிறகு canteenல milk packer வாங்கி குடிச்சம். அதுக்கு பிறகு நாங்க ITPM Assignment செய்ய தொடங்கினங்கள்.but sentance தேடி தேடி அலுத்து போச்சு பிறகு tea ,biscurt வாங்கி சாப்பிட்டு வீட்ட போயிட்டம்.பிறகு nextday வந்து canteen இருந்து start பண்ணினங்க time தான் போகுது,இப்போ செய்து கொண்டு தான் இருந்து இதை எழுதுறேன் எப்படியும் இண்டைக்குள்ள ஒரு முடிவுக்கு வருவம் எண்டு ninaikkiren.';
  const actual = await typeAndConvert(page, input);
  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0003', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0003', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0004 - Heavy slang usage', async ({ page }) => {
  const input = 'machaan, inniku full seendaa! ';
  const expected = 'மச்சான், இன்னிக்கு full சீன்டா! '; 

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0004', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0004', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0005 - Line breaks', async ({ page }) => {
  const input = 'naan book-la paathten.';
  const expected = 'நான் புக்ல பார்த்தேன்.';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0005', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0005', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0006 - Numbers', async ({ page }) => {
  const input = 'en registration number 12345678';
  const expected = 'என் registration நம்பர் 12345678';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0006', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0006', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0007 - Dates', async ({ page }) => {
  const input = 'enathu pirantha thikathi 26-12-2003';
  const expected = 'எனது பிறந்த திகதி 26-12-2003';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0007', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0007', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0008 - Units of measurements', async ({ page }) => {
  const input = 'enathu height 55cm, weight 50kg, temperature 98.6F';
  const expected = 'எனது height 55cm, weight 50kg, temperature 98.6F';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0008', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0008', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0009 - English abbreviations and short forms ', async ({ page }) => {
  const input = 'enathu BOC accountla Rs.20000 irukku.';
  const expected = 'எனது BOC accountla Rs.20000 irukku.';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0009', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0009', input, expected, actual, 'FAIL');
    throw error;
  }
});

test('Neg_Fun_0010 - English technical/', async ({ page }) => {
  const input = 'ennidamum nanparkaliddayum Instagram irukkirathu.';
  const expected = 'என்னிடமும் நண்பர்களிடையும் Instagram இருக்கிறது.';

  await page.goto('https://tamil.changathi.com/');
  const actual = await typeAndConvert(page, input);

  try {
    expect(actual).toBe(expected);
    addResult('Neg_Fun_0010', input, expected, actual, 'PASS');
  } catch (error) {
    addResult('Neg_Fun_0010', input, expected, actual, 'FAIL');
    throw error;
  }
});
