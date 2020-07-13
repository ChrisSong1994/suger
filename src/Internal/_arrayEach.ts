/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(
  array: string | any[],
  iteratee: (arg0: any, arg1: number, arg2: any) => boolean
) {
  var index = -1,
    length = array == null ? 0 : array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

export default arrayEach
