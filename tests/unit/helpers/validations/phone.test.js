const validate = require('./../../../../helpers/form-validation')

test('Too short', () => {
  expect(validate.phone('12345')).toBe('Invalid phone number');
});

test('Too long', () => {
  expect(validate.phone('99991234123412345')).toBe('Invalid phone number');
});

test('Bad format', () => {
  expect(validate.phone('1234-12-1233')).toBe('Invalid phone number');
});

test('Success no special chars', () => {
  expect(validate.phone('1234567890')).toBe(true);
});

test('Success dashes', () => {
  expect(validate.phone('123-456-7890')).toBe(true);
});

test('Success paranthesis', () => {
  expect(validate.phone('(123) 456-7890')).toBe(true);
});