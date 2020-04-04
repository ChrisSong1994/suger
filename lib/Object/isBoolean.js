import {checkType} from "../Utils/util";

const isBoolean = (target) => {
  return checkType(target) === "Boolean";
};

export default isBoolean;