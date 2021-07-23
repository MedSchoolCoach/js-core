const convertors = require('./../../../../helpers/key-convertors')

test('Test object', () => {
  expect(convertors.keysToCamel({
    test_1: 'value one',
    test_two: 'value two',
    test3: 'value three',
    testFour: 'valueFour'
  })).toStrictEqual({
    test1: 'value one',
    testTwo: 'value two',
    test3: 'value three',
    testFour: 'valueFour'
  });
});

test('Test string should not change', () => {
  expect(convertors.keysToCamel('I_am_a_string')).toBe('I_am_a_string')
})

test('Test array should not change', () => {
  expect(convertors.keysToCamel(['test_1', 'test_two', 'test3', 'testFour']))
    .toStrictEqual(['test_1', 'test_two', 'test3', 'testFour']);
});
