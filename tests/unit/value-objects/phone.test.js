const PhoneNumber = require('./../../../value-objects/PhoneNumber')

test('1234567890 as int', () => {
  const input = 1234567890
  const Phone = new PhoneNumber(input)
  expect(Phone.number).toBe(input)
  expect(Phone.int).toBe(parseInt(input))
  expect(Phone.display).toBe('(123) 456-7890')
})


test('1234567890 as string', () => {
  const input = '1234567890'
  const Phone = new PhoneNumber(input)
  expect(Phone.number).toBe(input)
  expect(Phone.int).toBe(parseInt(input))
  expect(Phone.display).toBe('(123) 456-7890')
})


test('(123) 456-7890 as string', () => {
  const input = '(123) 456-7890'
  const Phone = new PhoneNumber(input)
  expect(Phone.number).toBe(input)
  expect(Phone.int).toBe(1234567890)
  expect(Phone.display).toBe('(123) 456-7890')
})

test('(123) 456-7890 as string', () => {
  const input = '123-456-7890'
  const Phone = new PhoneNumber(input)
  expect(Phone.number).toBe(input)
  expect(Phone.int).toBe(1234567890)
  expect(Phone.display).toBe('(123) 456-7890')
})