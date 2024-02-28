import { textTypeType } from "../../../../../redux/slices/text type/TextTypeSlice";
import { LowercaseWords } from "../../words array/lowercase";
import { UppercaseWords } from "../../words array/uppercase";
import { CamelcaseWords } from "../../words array/camelcase";
import { MixedcaseWords } from "../../words array/mixedcase";
import { Symbols } from "../../words array/symbol";

export const selectWordArray = (textType: textTypeType) => {
  if (textType.lowercase) {
    return LowercaseWords;
  }
  if (textType.uppercase) {
    return UppercaseWords;
  }
  if (textType.camelcase) {
    return CamelcaseWords;
  }
  if (textType.mixedcase) {
    return MixedcaseWords;
  }
  if (textType.symbols) {
    return Symbols;
  }
};
