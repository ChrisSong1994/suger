import { checkType } from '../util'

const isSymbol = function (target: any): boolean {
  return checkType(target) === 'Symbol'
}

export default isSymbol
