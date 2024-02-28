import { keyUnderline } from "./keyUnderline";

export const handleLastKeypress = (
  key: string,
  wordIndex: number,
  letterIndex: number,
  key_press: number,
  display_words: string[],
  caret_last: boolean,
  extra_letter: boolean,
  extra_letter_count: number,
  total_mistakes: number,
  current_mistakes: number,
  error_indexes: number[],
  correct_words: number,
  test_end: boolean,
  test_difficulty: string
) => {
  key_press++;
  if (key === " ") {
    if (current_mistakes === 0) {
      correct_words++;
    } else {
      keyUnderline(wordIndex);
      total_mistakes++;
      if (test_difficulty === "medium" || test_difficulty === "hard") {
        test_end = true;
      }
    }
    if (wordIndex === display_words.length - 1) {
      test_end = true;
    }
    wordIndex++;
    current_mistakes = 0;
    error_indexes = [];
    letterIndex = 0;
    caret_last = false;
    extra_letter = false;
    extra_letter_count = 0;
  } else {
    if (test_difficulty === "hard") {
      test_end = true;
    }
    if (extra_letter_count < 10) {
      let arr = display_words;
      arr[wordIndex] = arr[wordIndex] + key;
      letterIndex++;
      display_words = arr;
      extra_letter = true;
      extra_letter_count++;
      total_mistakes++;
      current_mistakes++;
    }
  }

  return [
    wordIndex,
    letterIndex,
    key_press,
    caret_last,
    extra_letter,
    extra_letter_count,
    total_mistakes,
    current_mistakes,
    error_indexes,
    correct_words,
    test_end,
  ] as const;
};
