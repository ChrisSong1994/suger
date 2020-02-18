import {checkType} from "../../utils/util";

const isArray = target => {
  if (Array.isArray) return Array.isArray(target);
  return checkType(target) === "Array";
};

export default isArray;
