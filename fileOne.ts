import { f2 } from './fileTwo'

export const worker = () => {
  console.log('this is worker')
  return f2()
}
