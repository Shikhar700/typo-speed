import { textTypeType } from "../../../../../redux/slices/text type/TextTypeSlice";
import { selectActiveTypesWordsArray } from "./selectActiveTypesWordsArray";

export const generateMultipleTypesWords = (
  amount: number,
  textType: textTypeType
) => {
  let selectArr: string[][] = [];
  selectArr = selectActiveTypesWordsArray(textType);
  let returnArr: string[] = [];
  let value = amount;

  while (value > 0) {
    let indexOuter = Math.floor(Math.random() * selectArr.length);
    if (selectArr[indexOuter].length === 0) {
      let value = Math.floor(Math.random() * 999);
      returnArr.push(value.toString());
    } else {
      let indexInner = Math.floor(Math.random() * selectArr[indexOuter].length);
      returnArr.push(selectArr[indexOuter][indexInner]);
    }
    value--;
  }

  return returnArr;
};
