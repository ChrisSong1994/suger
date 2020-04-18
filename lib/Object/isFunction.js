import {checkType} from "lib/Utils/_util";

const isFunction = (target) => {
  const type = checkType(target);
  return type === "Function";
};

export default isFunction;