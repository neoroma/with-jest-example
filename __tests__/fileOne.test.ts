import { worker } from '../fileOne'
import * as utils from '../fileTwo'

describe('test', () => {
  test('worker', () => {
    const spyF2 = jest.spyOn(utils, 'f2')
    spyF2.mockImplementation(() => 'mock implementation')

    const result = worker()
    expect(result).toBe('mock implementation')
  })
})
