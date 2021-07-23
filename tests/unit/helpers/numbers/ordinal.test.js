const numbers = require('./../../../../helpers/number-helpers')

test('Test one', () => {
  expect(numbers.getNumberWithOrdinal(1)).toBe('1st')
})

test('Test two', () => {
  expect(numbers.getNumberWithOrdinal(2)).toBe('2nd')
})

test('Test three', () => {
  expect(numbers.getNumberWithOrdinal(3)).toBe('3rd')
})

test('Test four', () => {
  expect(numbers.getNumberWithOrdinal(4)).toBe('4th')
})

test('Test five', () => {
  expect(numbers.getNumberWithOrdinal(5)).toBe('5th')
})

test('Test 14', () => {
  expect(numbers.getNumberWithOrdinal(14)).toBe('14th')
})

test('Test 33', () => {
  expect(numbers.getNumberWithOrdinal(33)).toBe('33rd')
})

test('Test 102', () => {
  expect(numbers.getNumberWithOrdinal(102)).toBe('102nd')
})