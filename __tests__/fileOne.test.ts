import { worker } from '../fileOne.ts'

jest.mock('../fileTwo', () => {
  return {
    f2: jest.fn(() => 'mock implementation'),
    // f2: () => 'mocked baz',
  }
})

describe('test', () => {
  test('worker', () => {
    const result = worker()
    expect(result).toBe('mock implementation')
  })
})
