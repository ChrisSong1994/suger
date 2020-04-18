import {checkType} from "../Utils/_util";

const isBoolean = (target) => {
  return checkType(target) === "Boolean";
};

export default isBoolean;