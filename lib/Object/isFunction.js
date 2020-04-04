import {checkType} from "../Utils/util";

const isFunction = (target) => {
  return checkType(target) === "Function";
};

export default isFunction;