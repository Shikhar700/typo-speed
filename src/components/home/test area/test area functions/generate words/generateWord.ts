import { textTypeType } from "../../../../../redux/slices/text type/TextTypeSlice";
import { generateSingleTypeWords } from "./generateSingleTypeWords";
import { generateMultipleTypesWords } from "./generateMultipleTypesWords";

export const generateWord = (amount: number, textType: textTypeType) => {
  let activeTypes = 0;
  Object.values(textType).forEach((ins) => {
    if (ins === true) {
      activeTypes++;
    }
  });

  let returnArr: string[] = [];

  if (activeTypes === 1) {
    returnArr = generateSingleTypeWords(amount, textType);
  } else {
    returnArr = generateMultipleTypesWords(amount, textType);
  }

  return returnArr;
};
