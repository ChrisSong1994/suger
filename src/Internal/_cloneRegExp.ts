/**
 * @param {RegExp} regexp
 * @param {RegExp} result
 */
const cloneRegExp = (regexp: RegExp): RegExp => {
  const result = new RegExp(regexp.source, getRegExpFlags(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

/**获取正则的flag
 * @param {RegExp} regexp
 * @param {String} flags
 */
const getRegExpFlags = (regexp: RegExp): string => {
  var flags = ''
  if (regexp.global) flags += 'g'
  if (regexp.ignoreCase) flags += 'i'
  if (regexp.multiline) flags += 'm'
  return flags
}

export default cloneRegExp
