const DateObject = require('../../../value-objects/DateObject')

test('2020-01-01', () => {
  const date = '2020-01-01'
  const DO = new DateObject(date)
  expect(DO.date).toStrictEqual(new Date(date))
  expect(DO.api).toBe(date)
  expect(DO.noTime).toBe(date)
  expect(DO.sortable).toBe(20200101)
  expect(DO.display).toBe('01/01/2020')
})

test('01-31-2021', () => {
  const date = '01-31-2021'
  const DO = new DateObject(date)
  expect(DO.date).toStrictEqual(new Date(date))
  expect(DO.api).toBe('2021-01-31')
  expect(DO.noTime).toBe('2021-01-31')
  expect(DO.sortable).toBe(20210131)
  expect(DO.display).toBe('01/31/2021')
})

test('01/31/2021', () => {
  const date = '01/31/2021'
  const DO = new DateObject(date)
  expect(DO.date).toStrictEqual(new Date(date))
  expect(DO.api).toBe('2021-01-31')
  expect(DO.noTime).toBe('2021-01-31')
  expect(DO.sortable).toBe(20210131)
  expect(DO.display).toBe('01/31/2021')
})

// Note typed out dates will have timezone conflicts on regular date
test('August 12, 2021', () => {
  const date = 'August 12, 2021'
  const DO = new DateObject(date)
  expect(DO.api).toBe('2021-08-12')
  expect(DO.noTime).toBe('2021-08-12')
  expect(DO.sortable).toBe(20210812)
  expect(DO.display).toBe('08/12/2021')
})