const deepClone = require('../../src/Internal/_deepClone').default

function Person(pname) {
  this.name = pname
}

const kobe = new Person('kobe')

// 函数
function say() {
  console.log('hi')
  return 'hi'
}

const reg = new RegExp('ab+c', 'i')
console.log(reg.lastIndex)
reg.lastIndex = 2

const oldObj = {
  a: say,
  b: [1, 2, 3],
  c: new RegExp('ab+c', 'i'),
  d: Person,
  e: kobe,
}

test('克隆对象', () => {
  // 数组
  console.log('函数')
  expect(deepClone(oldObj).a()).toEqual('hi')
  expect(deepClone(oldObj).a).toEqual(say)
  console.log('数组')
  expect(deepClone(oldObj).b).toEqual([1, 2, 3])
  console.log('正则')
  expect(deepClone(oldObj).c).toEqual(/ab+c/i)
  console.log('构造函数')
  expect(deepClone(oldObj).d).toEqual(Person)
  console.log('对象')
  expect(deepClone(oldObj).e).toEqual(kobe)
})
