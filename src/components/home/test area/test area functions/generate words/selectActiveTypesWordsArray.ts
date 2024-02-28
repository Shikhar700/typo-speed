import { textTypeType } from "../../../../../redux/slices/text type/TextTypeSlice";
import { LowercaseWords } from "../../words array/lowercase";
import { UppercaseWords } from "../../words array/uppercase";
import { CamelcaseWords } from "../../words array/camelcase";
import { MixedcaseWords } from "../../words array/mixedcase";
import { Symbols } from "../../words array/symbol";

export const selectActiveTypesWordsArray = (textType: textTypeType) => {
  let returnArr: string[][] = [];
  if (textType.lowercase) {
    returnArr.push(LowercaseWords);
  }
  if (textType.uppercase) {
    returnArr.push(UppercaseWords);
  }
  if (textType.camelcase) {
    returnArr.push(CamelcaseWords);
  }
  if (textType.mixedcase) {
    returnArr.push(MixedcaseWords);
  }
  if (textType.numbers) {
    returnArr.push([]);
  }
  if (textType.symbols) {
    returnArr.push(Symbols);
  }

  return returnArr;
};
