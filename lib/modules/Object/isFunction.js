import {checkType} from "../../utils/util";

const isFunction = (target) => {
  return checkType(target) === "Function";
};

export default isFunction;