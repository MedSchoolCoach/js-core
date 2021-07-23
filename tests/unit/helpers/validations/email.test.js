const validate = require('./../../../../helpers/form-validation')

test('Missing @ fails', () => {
  expect(validate.email('dev.com')).toBe('Invalid email');
});

test('Missing @ fails', () => {
  expect(validate.email('dev@com')).toBe('Invalid email');
});

test('Correctly formatted email returns true', () => {
  expect(validate.email('dev@medschoolcoach.com')).toBe(true);
});