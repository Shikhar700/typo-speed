import { textTypeType } from "../../../../../redux/slices/text type/TextTypeSlice";
import { selectWordArray } from "./selectWordsArray";

export const generateSingleTypeWords = (
  amount: number,
  textType: textTypeType
) => {
  let returnArr: string[] = [];
  let wordsArr: string[] = [];
  if (!textType.numbers) {
    wordsArr = selectWordArray(textType)!;
  }
  let value = amount;
  while (value > 0) {
    if (textType.numbers) {
      let val = Math.floor(Math.random() * 999);
      returnArr.push(val.toString());
    } else {
      let index = Math.floor(Math.random() * wordsArr.length);
      returnArr.push(wordsArr[index]);
    }
    value--;
  }

  return returnArr;
};
