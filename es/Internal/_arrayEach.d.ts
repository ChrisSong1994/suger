/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
declare function arrayEach(
  array: string | any[],
  iteratee: (arg0: any, arg1: number, arg2: any) => boolean,
): string | any[];
export default arrayEach;
