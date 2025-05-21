import { strCapitalize } from "../js/capitalize";

test('there word is capitalized', () => {
  expect(strCapitalize('hello')).toBe('Hello');
})

test('single word', ()=>{
    expect(strCapitalize('a')).toBe('A')
})

test('empty string', ()=>{
    expect(strCapitalize('')).toBe('')
})


