import { keyCorrect } from "./keyCorrect";
import { keyIncorrect } from "./keyIncorrect";
import { keyUnderline } from "./keyUnderline";

export const handleNormalKeypress = (
  key: string,
  wordIndex: number,
  letterIndex: number,
  key_press: number,
  display_words: string[],
  caret_last: boolean,
  total_mistakes: number,
  current_mistakes: number,
  error_indexes: number[],
  correct_words: number,
  test_end: boolean,
  test_difficulty: string
) => {
  if (key === " ") {
    if (letterIndex > 0) {
      total_mistakes++;
      key_press++;
      if (test_difficulty === "medium" || test_difficulty === "hard") {
        test_end = true;
      }
      if (wordIndex === display_words.length - 1) {
        test_end = true;
        wordIndex++;
      } else {
        keyUnderline(wordIndex);
        current_mistakes = 0;
        letterIndex = 0;
        wordIndex++;
      }
    }
  } else {
    key_press++;
    if (key === display_words[wordIndex][letterIndex]) {
      keyCorrect(wordIndex, letterIndex);
    }
    if (key !== display_words[wordIndex][letterIndex]) {
      keyIncorrect(wordIndex, letterIndex, false);
      total_mistakes++;
      current_mistakes++;
      error_indexes.push(letterIndex);
      if (test_difficulty === "hard") {
        test_end = true;
      }
    }
    if (letterIndex < display_words[wordIndex].length - 1) {
      letterIndex++;
    } else if (letterIndex === display_words[wordIndex].length - 1) {
      caret_last = true;
      if (wordIndex === display_words.length - 1) {
        if (current_mistakes === 0) {
          correct_words++;
          wordIndex++;
          test_end = true;
        }
      }
    }
  }

  return [
    wordIndex,
    letterIndex,
    key_press,
    caret_last,
    total_mistakes,
    current_mistakes,
    error_indexes,
    correct_words,
    test_end,
  ] as const;
};
