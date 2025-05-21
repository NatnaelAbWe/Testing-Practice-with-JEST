import { caesarCipher } from "../js/ciserCyper.js";

test('shifts lowercase letters', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('shifts uppercase letters', () => {
  expect(caesarCipher('XYZ', 2)).toBe('ZAB');
});

test('preserves non-letter characters', () => {
  expect(caesarCipher('abc!', 2)).toBe('cde!');
});

test('wraps correctly from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('handles mixed case and punctuation', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});
