const PromiseHandler = require('./../../../lib/core/PromiseHandler')


test('Test unresolved', () => {
  const response = 'hello world'
  const PH = new PromiseHandler({
    call: promise,
    params: response,
  })

  expect(PH.loading).toBe(true)
  expect(PH.data).toBe(null)
})

test('Basic success no transform', async () => {
  const response = 'hello world'
  const PH = await new PromiseHandler({
    call: promise,
    params: response,
  })

  expect(PH.loading).toBe(false)
  expect(PH.data).toBe(response)
})

test('Test transform', async () => {
  const response = 'hello world'
  const PH = await new PromiseHandler({
    call: promise,
    params: response,
    transform: d => d.replace('hello', 'goodbye')
  })

  expect(PH.loading).toBe(false)
  expect(PH.data).toBe('goodbye world')
})

test('Test string error', async () => {
  const response = 'hello world'
  const PH = await new PromiseHandler({
    call: failedPromise,
    params: response,
  })

  expect(PH.loading).toBe(true)
  expect(PH.data).toBe(null)
  expect(PH.errors).toBe(response)
})

test('Test errors object', async () => {
  const response = {
    data: {
      errors: {
        one: 'Everything failed',
        two: 'The world exploded'
      }
    }
  }
  const PH = await new PromiseHandler({
    call: failedPromise,
    params: response,
  })

  expect(PH.loading).toBe(true)
  expect(PH.data).toBe(null)
  expect(PH.errors).toBe(response)
})

test('Test errors message', async () => {
  const response = {
    data: {
      message: {
        one: 'Everything failed',
        two: 'The world exploded'
      }
    }
  }
  const PH = await new PromiseHandler({
    call: failedPromise,
    params: response,
  })
})

test('Test errors random', async () => {
  const response = {
    data: ['Random Error']
  }

  const PH = await new PromiseHandler({
    call: failedPromise,
    params: response,
  })

  expect(PH.loading).toBe(true)
  expect(PH.data).toBe(null)
  expect(PH.errors).toBe(response)
})


function promise(result) {
  return Promise.resolve({data: result});
}

function failedPromise(result) {
  return Promise.reject(result)
}