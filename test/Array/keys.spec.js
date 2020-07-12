const keys = require('../../src').keys

const obj = { a: 1, b: 2 }

test('keys of obj to equel [a,b]', () => {
  expect(keys(obj)).toStrictEqual(['a', 'b'])
})
