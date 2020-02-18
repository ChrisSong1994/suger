import {checkType} from "../../utils/util";

const isBoolean = (target) => {
  return checkType(target) === "Boolean";
};

export default isBoolean;