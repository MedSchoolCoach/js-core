const MinutesObject = require('../../../value-objects/MinutesObject')

test('20 as int', () => {
  const min = 20
  const MO = new MinutesObject(min)
  expect(MO.minutes).toBe(min)
  expect(MO.time).toBe('0:20')
  expect(MO.hours).toBe(0.3)
})

test('40 as string', () => {
  const min = '40'
  const MO = new MinutesObject(min)
  expect(MO.minutes).toBe(40)
  expect(MO.time).toBe('0:40')
  expect(MO.hours).toBe(0.7)
})

test('130', () => {
  const min = 130
  const MO = new MinutesObject(min)
  expect(MO.minutes).toBe(130)
  expect(MO.time).toBe('2:10')
  expect(MO.hours).toBe(2.2)
})