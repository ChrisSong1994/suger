import isFunction from '../Lang/isFunction';
const functions = (obj) => {
  let names = [];
  for (let key in obj) {
    if (isFunction(obj[key])) {
      names.push(key);
    }
  }
  return names.sort();
};
export default functions;
