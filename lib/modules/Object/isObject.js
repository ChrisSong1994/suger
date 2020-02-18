import {checkType} from "../../utils/util";

const isObject = (target) => {
  return checkType(target) === "Object";
};

export default isObject;