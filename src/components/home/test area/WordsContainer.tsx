import { forwardRef, useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { generateWord } from "./test area functions/generate words/generateWord";
import { checkValidKey } from "./test area functions/checkValidKey";
import { keyIncorrect } from "./test area functions/keyIncorrect";
import { handleBackspace } from "./test area functions/handleBackspace";
import { handleNormalKeypress } from "./test area functions/handleNormalKeypress";
import { handleLastKeypress } from "./test area functions/handleLastKeypress";
import { DECREMENT_DURATION } from "../../../redux/slices/time duration/TimeDurationSlice";
import { DECREMENT_COUNT } from "../../../redux/slices/word count/WordCountSlice";
import { FINISHED_TRUE } from "../../../redux/slices/test finished/TestFinishedSlice";
import { SET_CORRECT_WORDS } from "../../../redux/slices/correct words count/CorrectWordsCountSlice";
import { SET_MISTAKES_COUNT } from "../../../redux/slices/mistakes count/MistakesCountSlice";
import { SET_TIME_TAKEN } from "../../../redux/slices/time taken/TimeTakenSlice";
import { SET_KEYPRESS_COUNT } from "../../../redux/slices/key press count/KeyPressCountSlice";
import { CHANGE_IS_CHANGED } from "../../../redux/slices/setting changed/SettingChangedSlice";

const WordsContainer = forwardRef<HTMLInputElement>((props, containerRef) => {
  const mode = useAppSelector((state) => state.testMode.mode);
  const value = useAppSelector((state) => state.testValue.value);
  const timeDuration = useAppSelector((state) => state.timeDuration.duration);
  const isChanged = useAppSelector((state) => state.settingChanged.isChanged);
  const quickRestart = useAppSelector(
    (state) => state.quickRestart.quickRestart
  );
  const testDifficulty = useAppSelector(
    (state) => state.testDifficulty.testDifficulty
  );
  const textType = useAppSelector((state) => state.textType.textType);
  const dispatch = useAppDispatch();
  const fontSize = useAppSelector((state) => state.fontSize.fontSize);
  const letterSpacing = useAppSelector(
    (state) => state.letterSpacing.letterSpacing
  );
  const wordSpacing = useAppSelector((state) => state.wordSpacing.wordSpacing);
  const bgBlur = useAppSelector((state) => state.blurBg.blur);

  //ref for word and container
  const wordActiveRef = useRef<HTMLDivElement>(null);
  const wordInactiveRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const inpRef = useRef<HTMLTextAreaElement>(null);

  //generated words state
  const [displayWord, setDisplayWord] = useState<string[]>([]);

  //word and letter indexes state
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState<number>(0);

  //caret state
  const [caretLast, setCaretLast] = useState<boolean>(false);

  //extra letters state
  const [extraLetter, setExtraLetter] = useState<boolean>(false);
  const [extraLetterCount, setExtraLetterCount] = useState<number>(0);

  //error state
  const [totalMistakes, setTotalMistakes] = useState<number>(0);
  const [currentMistakes, setCurrentMistakes] = useState<number>(0);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [errorIndexes, setErrorIndexes] = useState<number[]>([]);

  //test state
  const [testStart, setTestStart] = useState<boolean>(false);
  const [testEnd, setTestEnd] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [keyPress, setKeyPress] = useState<number>(0);

  //input state
  const [inpValue, setInpValue] = useState<string>("");

  //initial useEffect
  useEffect(() => {
    if (!bgBlur) {
      console.log("hello");

      document.getElementById("container")?.focus();
      document.getElementById("hidden-textarea")?.focus();
    }
    inpRef.current?.focus();
    setDisplayWord([]);
    wordGenerator();
  }, [isChanged]);

  //useEffect to reset states and classes
  useEffect(() => {
    //reset states
    setActiveWordIndex(0);
    setActiveLetterIndex(0);
    setCaretLast(false);
    setExtraLetter(false);
    setExtraLetterCount(0);
    setTotalMistakes(0);
    setCurrentMistakes(0);
    setCorrectWords(0);
    setErrorIndexes([]);
    setTestStart(false);
    setTestEnd(false);
    setStartTime(0);
    setKeyPress(0);
    setInpValue("");

    //clearing interval
    clearInterval(intervalRef.current);

    //reset classes
    let spanArr = document.getElementsByTagName("span") as HTMLCollection;
    let i = 0;
    while (i < spanArr.length) {
      spanArr[i].classList.remove("text-extra");
      spanArr[i].classList.remove("text-darkTest");
      spanArr[i].classList.remove("text-error");
      i++;
    }

    let divArr = document.getElementsByTagName("div") as HTMLCollection;
    let j = 0;
    while (j < divArr.length) {
      divArr[j].classList.remove("underline");
      divArr[j].classList.remove("underline-offset-[5px]");
      divArr[j].classList.remove("decoration-error");
      j++;
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isChanged]);

  //useEffect to scroll active word to view
  useEffect(() => {
    wordActiveRef.current?.scrollIntoView({ block: "center" });
  }, [activeWordIndex]);

  //useEffect to change extra letters color
  useEffect(() => {
    if (extraLetter) {
      keyIncorrect(activeWordIndex, activeLetterIndex, true);
    }
  }, [extraLetterCount]);

  //useEffect to reduce word count
  useEffect(() => {
    if (testStart) {
      dispatch(DECREMENT_COUNT());
    }
  }, [activeWordIndex]);

  //useEffect to generate more words
  useEffect(() => {
    if (mode === "time") {
      if (activeWordIndex + 50 === displayWord.length) {
        wordGenerator();
      }
    }
  }, [activeWordIndex]);

  //useEffect to set variables after end of test
  useEffect(() => {
    if (testStart) {
      clearInterval(intervalRef.current);
      dispatch(SET_CORRECT_WORDS(correctWords));
      dispatch(SET_MISTAKES_COUNT(totalMistakes));
      dispatch(SET_KEYPRESS_COUNT(keyPress));
      let endTime = new Date().getTime();
      let time = (endTime - startTime) / 1000;
      if (time > 1 || time == 1) {
        time = Math.floor(time);
      }
      dispatch(SET_TIME_TAKEN(time));
      dispatch(FINISHED_TRUE());
    }
  }, [testEnd]);

  const wordGenerator = () => {
    let arr = [];
    if (mode === "time") {
      arr = generateWord(100, textType);
    } else {
      arr = generateWord(value, textType);
    }
    arr.map((ins) => setDisplayWord((prev) => [...prev, ins]));
  };

  const inpChangeHandler = (event: React.ChangeEvent) => {
    let dom = event.target as HTMLInputElement;
    let key = dom.value.slice(-1);
    if (inpValue.length > dom.value.length) {
      key = "Backspace";
    }
    if (checkValidKey(key)) {
      document.body.style.cursor = "none";
      if (!testStart) {
        setTestStart(true);
        if (mode === "time") {
          setStartTime(new Date().getTime());
          let timer = timeDuration;
          intervalRef.current = setInterval(() => {
            if (timer > 1) {
              timer--;
              dispatch(DECREMENT_DURATION());
            } else {
              dispatch(DECREMENT_DURATION());
              setTimeout(() => {
                clearInterval(intervalRef.current);
                setTestEnd(true);
                document.body.style.cursor = "context-menu";
              }, 50);
            }
          }, 1000);
        } else {
          setStartTime(new Date().getTime());
        }
      }
      let wordIndex: number = activeWordIndex;
      let letterIndex: number = activeLetterIndex;
      let key_press: number = keyPress;
      let caret_last: boolean = caretLast;
      let extra_letter: boolean = extraLetter;
      let extra_letter_count: number = extraLetterCount;
      let display_words: string[] = displayWord;
      let total_mistakes: number = totalMistakes;
      let current_mistakes: number = currentMistakes;
      let correct_words: number = correctWords;
      let error_indexes: number[] = errorIndexes;
      let test_end: boolean = testEnd;
      let test_difficulty: string = testDifficulty;

      if (key === "Backspace") {
        [
          wordIndex,
          letterIndex,
          key_press,
          caret_last,
          extra_letter,
          extra_letter_count,
          display_words,
          current_mistakes,
          error_indexes,
        ] = handleBackspace(
          wordIndex,
          letterIndex,
          key_press,
          caret_last,
          extra_letter,
          extra_letter_count,
          display_words,
          current_mistakes,
          error_indexes
        );
      } else {
        if (!caret_last) {
          [
            wordIndex,
            letterIndex,
            key_press,
            caret_last,
            total_mistakes,
            current_mistakes,
            error_indexes,
            correct_words,
            test_end,
          ] = handleNormalKeypress(
            key,
            wordIndex,
            letterIndex,
            key_press,
            display_words,
            caret_last,
            total_mistakes,
            current_mistakes,
            error_indexes,
            correct_words,
            test_end,
            test_difficulty
          );
        } else {
          [
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
          ] = handleLastKeypress(
            key,
            wordIndex,
            letterIndex,
            key_press,
            display_words,
            caret_last,
            extra_letter,
            extra_letter_count,
            total_mistakes,
            current_mistakes,
            error_indexes,
            correct_words,
            test_end,
            test_difficulty
          );
        }
      }

      setActiveWordIndex(wordIndex);
      setActiveLetterIndex(letterIndex);
      setKeyPress(key_press);
      setCaretLast(caret_last);
      setExtraLetter(extra_letter);
      setExtraLetterCount(extra_letter_count);
      setDisplayWord(display_words);
      setTotalMistakes(total_mistakes);
      setCurrentMistakes(current_mistakes);
      setCorrectWords(correct_words);
      setErrorIndexes(error_indexes);
      setTestEnd(test_end);

      setInpValue(dom.value);
    }
  };

  const inpKeyDownHandler = (event: React.KeyboardEvent) => {
    if (!(quickRestart === "off")) {
      if (event.key === (quickRestart === "esc" ? "Escape" : "Enter")) {
        dispatch(CHANGE_IS_CHANGED());
      }
    }
  };

  return (
    <main className="w-full flex justify-center relative">
      <input
        id="hidden-textarea"
        className="absolute opacity-0 z-[-5]"
        value={inpValue}
        ref={containerRef}
        onChange={inpChangeHandler}
        onKeyDown={inpKeyDownHandler}
        autoComplete="off"
      />
      <div
        onClick={() => {
          document.getElementById("hidden-textarea")?.focus();
          wordActiveRef.current?.scrollIntoView();
        }}
        id="container"
        className={
          "w-[1200px]  overflow-hidden  flex flex-wrap outline-none px-1  font-[3000] font-roboto text-lightTest caret-transparent select-none" +
          " " +
          (fontSize === "small"
            ? "h-[120px] text-[25px] leading-[40px]"
            : fontSize === "medium"
            ? "h-[180px] text-[35px] leading-[60px]"
            : "h-[210px] text-[45px] leading-[70px]")
        }
      >
        {displayWord.map((ins, indexWord) => (
          <div
            ref={
              indexWord === activeWordIndex ? wordActiveRef : wordInactiveRef
            }
            id={`word-${indexWord}`}
            key={`word-${indexWord}`}
            className={
              "flex" +
              " " +
              (wordSpacing === "small"
                ? "mr-4"
                : wordSpacing === "medium"
                ? "mr-6"
                : "mr-8") +
              " " +
              (letterSpacing === "small"
                ? "tracking-[2px]"
                : letterSpacing === "medium"
                ? "tracking-[4px]"
                : "tracking-[6px]")
            }
          >
            {ins.split("").map((ins, indexLetter) => (
              <span
                id={`${indexWord}${indexLetter}`}
                key={`${indexWord}${indexLetter}`}
                className="relative "
              >
                {ins}
                {indexWord === activeWordIndex &&
                  indexLetter === activeLetterIndex && (
                    <span
                      className={
                        "absolute top-[-2px] font-thin text-caret" +
                        " " +
                        (fontSize === "small"
                          ? "text-[35]"
                          : fontSize === "medium"
                          ? "text-[45]"
                          : "text-[55px]") +
                        " " +
                        (caretLast
                          ? fontSize === "small"
                            ? "right-[-8px]"
                            : fontSize === "medium"
                            ? "right-[-10px]"
                            : "right-[-16px]"
                          : fontSize === "small"
                          ? "left-[-8px]"
                          : fontSize === "medium"
                          ? "left-[-10px]"
                          : "left-[-16px]")
                      }
                    >
                      |
                    </span>
                  )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
});

export default WordsContainer;
