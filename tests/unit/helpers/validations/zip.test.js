const validate = require('./../../../../helpers/form-validation')

test('Too short', () => {
  expect(validate.zip('1')).toBe('Invalid zip code');
});

test('Too long', () => {
  expect(validate.zip('1234567')).toBe('Invalid zip code');
});

test('Success', () => {
  expect(validate.zip('12345')).toBe(true);
});
