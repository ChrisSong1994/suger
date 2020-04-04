import {checkType} from "lib/Utils/util";

const isFunction = (target) => {
  const type = checkType(target);
  return type === "Function";
};

export default isFunction;