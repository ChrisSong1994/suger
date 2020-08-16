/**
 * @param {Symbol} symbol
 * @param {Symbol} result
 */
const cloneSymbol = (symbol: Symbol): Symbol => {
  return Object(Symbol.prototype.valueOf.call(symbol))
}

export default cloneSymbol
