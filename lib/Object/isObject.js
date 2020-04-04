import {checkType} from "lib/Utils/util";

const isObject = (target) => {
  return checkType(target) === "Object";
};

export default isObject;