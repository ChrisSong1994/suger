import {checkType} from "lib/Utils/_util";

const isObject = (target) => {
  return checkType(target) === "Object";
};

export default isObject;