/**
 * @param {Symbol} symbol
 * @param {Symbol} result
 */
const cloneSymbol = (symbol) => {
  return Object(Symbol.prototype.valueOf.call(symbol));
};
export default cloneSymbol;
