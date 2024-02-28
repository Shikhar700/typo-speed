import { keyClear } from "./keyClear";

export const handleBackspace = (
  wordIndex: number,
  letterIndex: number,
  key_press: number,
  caret_last: boolean,
  extra_letter: boolean,
  extra_letter_count: number,
  display_words: string[],
  current_mistakes: number,
  error_indexes: number[]
) => {
  if (wordIndex + letterIndex > 0) {
    if (letterIndex > 0) {
      key_press--;
      if (extra_letter) {
        let arr = display_words;
        arr[wordIndex] = arr[wordIndex].substring(0, arr[wordIndex].length - 1);
        extra_letter_count--;
        letterIndex--;
        current_mistakes--;
        if (extra_letter_count === 0) {
          extra_letter = false;
        }
      } else {
        if (!caret_last) {
          letterIndex--;
        }
        keyClear(wordIndex, letterIndex);
        if (error_indexes.indexOf(letterIndex) !== -1) {
          current_mistakes--;
          error_indexes.splice(error_indexes.indexOf(letterIndex), 1);
        }
        if (caret_last) {
          caret_last = false;
        }
      }
    }
  }

  return [
    wordIndex,
    letterIndex,
    key_press,
    caret_last,
    extra_letter,
    extra_letter_count,
    display_words,
    current_mistakes,
    error_indexes,
  ] as const;
};
