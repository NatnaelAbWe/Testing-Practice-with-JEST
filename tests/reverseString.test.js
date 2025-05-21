import { reverseStr } from "../js/reverseString"

test('reverse a word', () => {
    expect(reverseStr('hello')).toBe('olleh')
})

test('reverse a word with a single character', () => {
    expect(reverseStr('a')).toBe('a')
})

test('reverse an empty character', () => {
    expect(reverseStr('')).toBe('')
})