import keys from "./keys";

const  values = (obj)=> {
  const  keyArr = keys(obj);
  const length = keyArr.length;
  const valueArr = Array(length);
  for (let i = 0; i < length; i++) {
    valueArr[i] = obj[keys[i]];
  }
  return values;
};

export default values;