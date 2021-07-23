const convertors = require('./../../../../helpers/key-convertors')

test('Test object', () => {
  expect(convertors.removeInitialUnderscores({
    _test_1: 'value one',
    _test_two: 'value two',
    _test3: 'value three',
    _testFour: 'valueFour'
  })).toStrictEqual({
    test_1: 'value one',
    test_two: 'value two',
    test3: 'value three',
    testFour: 'valueFour'
  });
});

test('Test string', () => {
  expect(convertors.removeInitialUnderscores('_I_am_a_string')).toBe('I_am_a_string')
})

test('Test array', () => {
  expect(convertors.removeInitialUnderscores(['_test_1', '_test_two', '_test3', '_testFour']))
    .toStrictEqual(['test_1', 'test_two', 'test3', 'testFour']);
});
