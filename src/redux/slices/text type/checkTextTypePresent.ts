import { initialStateType } from "./TextTypeSlice";

export const checkTextTypePresent = (
  state: initialStateType,
  activeType: boolean
) => {
  if (activeType) {
    let activeTypeCount = -1;
    Object.values(state.textType).forEach((ins) => {
      if (ins === true) {
        activeTypeCount++;
      }
    });
    if (activeTypeCount > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
