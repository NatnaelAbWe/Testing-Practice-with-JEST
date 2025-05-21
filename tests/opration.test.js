// import {sum, subtract ,multiply, divide} from '../js/opration'
import { sum,subtract,multiply,divide } from "../js/opration"
const a = 4;
const b = 2;

test('correctly added', () =>{
   expect(sum(a, b)).toBe(a + b)
})

test('correctly subtracted', () =>{
   expect(subtract(a, b)).toBe(a - b)
})

test('correctly multiplied', () =>{
   expect(multiply(a, b)).toBe(a * b)
})

test('correctly divided', () =>{
   expect(divide(a, b)).toBe(a / b)
})