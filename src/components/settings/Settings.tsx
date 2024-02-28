import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  DIFFICULTY_EASY,
  DIFFICULTY_MEDIUM,
  DIFFICULTY_HARD,
} from "../../redux/slices/test difficulty/TestDifficultySlice";
import {
  QUICK_RESTART_ENTER,
  QUICK_RESTART_ESC,
  QUICK_RESTART_OFF,
} from "../../redux/slices/quick restart/QuickRestartSlice";
import {
  TYPE_CAMELCASE,
  TYPE_LOWERCASE,
  TYPE_MIXEDCASE,
  TYPE_NUMBERS,
  TYPE_SYMBOLS,
  TYPE_UPPERCASE,
  initialStateType,
} from "../../redux/slices/text type/TextTypeSlice";
import { checkTextTypePresent } from "../../redux/slices/text type/checkTextTypePresent";
import {
  FONT_LARGE,
  FONT_MEDIUM,
  FONT_SMALL,
} from "../../redux/slices/font size/FontSizeSlice";
import {
  LETTER_SPACING_LARGE,
  LETTER_SPACING_MEDIUM,
  LETTER_SPACING_SMALL,
} from "../../redux/slices/letter spacing/LetterSpacingSlice";
import {
  WORD_SPACING_LARGE,
  WORD_SPACING_MEDIUM,
  WORD_SPACING_SMALL,
} from "../../redux/slices/word spacing/WordSpacingSlice";
import { SET_THEME } from "../../redux/slices/theme/ThemeSlice";

const Settings = () => {
  const testDifficulty = useAppSelector(
    (state) => state.testDifficulty.testDifficulty
  );
  const quickRestart = useAppSelector(
    (state) => state.quickRestart.quickRestart
  );
  const textType = useAppSelector((state) => state.textType.textType);
  const fontSize = useAppSelector((state) => state.fontSize.fontSize);
  const letterSpacing = useAppSelector(
    (state) => state.letterSpacing.letterSpacing
  );
  const wordSpacing = useAppSelector((state) => state.wordSpacing.wordSpacing);
  const theme = useAppSelector((state) => state.theme.theme);

  const dispatch = useAppDispatch();

  return (
    <main className="w-full flex justify-center">
      <div className="w-[1200px] px-4">
        <h1 className="font-semibold text-3xl underline underline-offset-8 mb-8 text-over">
          SETTINGS
        </h1>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest">
            Test-difficulty
          </header>
          <div className="flex max-[650px]:flex-col">
            <div className="w-[60%] pr-8 max-[650px]:w-[100%] max-[650px]:pr-0 max-[650px]:pb-3">
              <p className="text-[18px] text-over">
                Easy mode allows all types of error. Medium mode allows key
                error, any active error before pressing space will end the test.
                Hard mode do not allow any error, any incorrect key press will
                end the test
              </p>
            </div>
            <div className="w-[40%] grid grid-cols-3 gap-4 place-content-start max-[650px]:w-[100%] max-[400px]:grid-cols-1">
              <button
                onClick={() => {
                  dispatch(DIFFICULTY_EASY());
                  localStorage.setItem(
                    "typo-speed-testDifficulty",
                    JSON.stringify("easy")
                  );
                }}
                className={
                  "  text-[18px] py-1 rounded-md transition-colors duration-200 hover:text-btnOver hover:bg-btnOver bg-btn" +
                  " " +
                  (testDifficulty === "easy"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                easy
              </button>
              <button
                onClick={() => {
                  dispatch(DIFFICULTY_MEDIUM());
                  localStorage.setItem(
                    "typo-speed-testDifficulty",
                    JSON.stringify("medium")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (testDifficulty === "medium"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                medium
              </button>
              <button
                onClick={() => {
                  dispatch(DIFFICULTY_HARD());
                  localStorage.setItem(
                    "typo-speed-testDifficulty",
                    JSON.stringify("hard")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (testDifficulty === "hard"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                hard
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest">
            Quick-restart
          </header>
          <div className="flex max-[650px]:flex-col">
            <div className="w-[60%] pr-8 max-[650px]:w-[100%] max-[650px]:pr-0 max-[650px]:pb-3">
              <p className="text-[18px] text-over">
                Press Tab or Enter key for quick restart, you can turn off quick
                restart by selecting off option
              </p>
            </div>
            <div className="w-[40%] grid grid-cols-3 gap-4 place-content-start max-[650px]:w-[100%] max-[400px]:grid-cols-1 ">
              <button
                onClick={() => {
                  dispatch(QUICK_RESTART_OFF());
                  localStorage.setItem(
                    "typo-speed-quickRestart",
                    JSON.stringify("off")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (quickRestart === "off"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                off
              </button>
              <button
                onClick={() => {
                  dispatch(QUICK_RESTART_ESC());
                  localStorage.setItem(
                    "typo-speed-quickRestart",
                    JSON.stringify("esc")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (quickRestart === "esc"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                esc
              </button>
              <button
                onClick={() => {
                  dispatch(QUICK_RESTART_ENTER());
                  localStorage.setItem(
                    "typo-speed-quickRestart",
                    JSON.stringify("enter")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (quickRestart === "enter"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                enter
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest">
            Font-size
          </header>
          <div className="flex max-[650px]:flex-col">
            <div className="w-[60%] pr-8 max-[650px]:w-[100%] max-[650px]:pr-0 max-[650px]:pb-3">
              <p className="text-[18px] text-over">
                Choose from the options to change the size of the font shown
                during the test
              </p>
            </div>
            <div className="w-[40%] grid grid-cols-3 gap-4 place-content-start max-[650px]:w-[100%] max-[400px]:grid-cols-1 ">
              <button
                onClick={() => {
                  dispatch(FONT_SMALL());
                  localStorage.setItem(
                    "typo-speed-fontSize",
                    JSON.stringify("small")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (fontSize === "small"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                small
              </button>
              <button
                onClick={() => {
                  dispatch(FONT_MEDIUM());
                  localStorage.setItem(
                    "typo-speed-fontSize",
                    JSON.stringify("medium")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (fontSize === "medium"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                medium
              </button>
              <button
                onClick={() => {
                  dispatch(FONT_LARGE());
                  localStorage.setItem(
                    "typo-speed-fontSize",
                    JSON.stringify("large")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (fontSize === "large"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                large
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest">
            Letter-spacing
          </header>
          <div className="flex max-[650px]:flex-col">
            <div className="w-[60%] pr-8 max-[650px]:w-[100%] max-[650px]:pr-0 max-[650px]:pb-3">
              <p className="text-[18px] text-over">
                Choose from the options to change the space between letters
                shown during the test
              </p>
            </div>
            <div className="w-[40%] grid grid-cols-3 gap-4 place-content-start max-[650px]:w-[100%] max-[400px]:grid-cols-1 ">
              <button
                onClick={() => {
                  dispatch(LETTER_SPACING_SMALL());
                  localStorage.setItem(
                    "typo-speed-letterSpacing",
                    JSON.stringify("small")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (letterSpacing === "small"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                small
              </button>
              <button
                onClick={() => {
                  dispatch(LETTER_SPACING_MEDIUM());
                  localStorage.setItem(
                    "typo-speed-letterSpacing",
                    JSON.stringify("medium")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (letterSpacing === "medium"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                medium
              </button>
              <button
                onClick={() => {
                  dispatch(LETTER_SPACING_LARGE());
                  localStorage.setItem(
                    "typo-speed-letterSpacing",
                    JSON.stringify("large")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (letterSpacing === "large"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                large
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest">
            Word-spacing
          </header>
          <div className="flex max-[650px]:flex-col">
            <div className="w-[60%] pr-8 max-[650px]:w-[100%] max-[650px]:pr-0 max-[650px]:pb-3">
              <p className="text-[18px] text-over">
                Choose from the options to change the space between words shown
                during the test
              </p>
            </div>
            <div className="w-[40%] grid grid-cols-3 gap-4 place-content-start max-[650px]:w-[100%] max-[400px]:grid-cols-1 ">
              <button
                onClick={() => {
                  dispatch(WORD_SPACING_SMALL());
                  localStorage.setItem(
                    "typo-speed-wordSpacing",
                    JSON.stringify("small")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (wordSpacing === "small"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                small
              </button>
              <button
                onClick={() => {
                  dispatch(WORD_SPACING_MEDIUM());
                  localStorage.setItem(
                    "typo-speed-wordSpacing",
                    JSON.stringify("medium")
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (wordSpacing === "medium"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                medium
              </button>
              <button
                onClick={() => {
                  dispatch(WORD_SPACING_LARGE());
                  localStorage.setItem(
                    "typo-speed-wordSpacing",
                    JSON.stringify("large")
                  );
                }}
                className={
                  " text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (wordSpacing === "large"
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                large
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-12">
          <header className="font-semibold text-[20px] text-darkTest mb-2">
            Text-type
          </header>
          <div className="flex-col">
            <div className="w-[100%] pb-3 max-[650px]:w-[100%] max-[650px]:pr-0 ">
              <p className="text-[18px] text-over">
                Select the type of text you want to see in the test, you can
                select mutiple types
              </p>
            </div>
            <div className="w-[100%] grid grid-cols-4 gap-4 max-[650px]:grid-cols-2 max-[400px]:grid-cols-1">
              <button
                onClick={() => {
                  dispatch(TYPE_LOWERCASE());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.lowercase)) {
                    obj.textType.lowercase
                      ? (obj.textType.lowercase = false)
                      : (obj.textType.lowercase = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (textType.lowercase
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                lowercase
              </button>
              <button
                onClick={() => {
                  dispatch(TYPE_UPPERCASE());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.uppercase)) {
                    obj.textType.uppercase
                      ? (obj.textType.uppercase = false)
                      : (obj.textType.uppercase = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (textType.uppercase
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                uppercase
              </button>
              <button
                onClick={() => {
                  dispatch(TYPE_CAMELCASE());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.camelcase)) {
                    obj.textType.camelcase
                      ? (obj.textType.camelcase = false)
                      : (obj.textType.camelcase = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn" +
                  " " +
                  (textType.camelcase
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                camelcase
              </button>
              <button
                onClick={() => {
                  dispatch(TYPE_MIXEDCASE());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.mixedcase)) {
                    obj.textType.mixedcase
                      ? (obj.textType.mixedcase = false)
                      : (obj.textType.mixedcase = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (textType.mixedcase
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                mixedcase
              </button>
              <button
                onClick={() => {
                  dispatch(TYPE_NUMBERS());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.numbers)) {
                    obj.textType.numbers
                      ? (obj.textType.numbers = false)
                      : (obj.textType.numbers = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (textType.numbers
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                numbers
              </button>
              <button
                onClick={() => {
                  dispatch(TYPE_SYMBOLS());
                  let obj: initialStateType = {
                    textType: JSON.parse(
                      localStorage.getItem("typo-speed-textType")!
                    ),
                  };
                  if (checkTextTypePresent(obj, obj.textType.symbols)) {
                    obj.textType.symbols
                      ? (obj.textType.symbols = false)
                      : (obj.textType.symbols = true);
                  }
                  localStorage.setItem(
                    "typo-speed-textType",
                    JSON.stringify(obj.textType)
                  );
                }}
                className={
                  "text-[18px] py-1 rounded-md transition-colors duration-200 hover:bg-btnOver hover:text-btnOver bg-btn " +
                  " " +
                  (textType.symbols
                    ? "bg-btnSelect text-btnSelectOver"
                    : "text-over")
                }
              >
                symbols
              </button>
            </div>
          </div>
        </section>

        <section className="flex-col mb-40">
          <header className="font-semibold text-[20px] text-darkTest mb-2">
            Themes
          </header>
          <div className="flex-col">
            <div className="w-[100%] pb-3 max-[650px]:w-[100%] max-[650px]:pr-0 ">
              <p className="text-[18px] text-over">
                Select from the following themes to change the appearance of the
                site
              </p>
            </div>
            <div className="w-[100%] grid grid-cols-4 gap-4 max-[650px]:grid-cols-2 max-[400px]:grid-cols-1 ">
              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-1"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-1")
                  );
                }}
                className={
                  "theme-1 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-1" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-1
              </div>
              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-2"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-2")
                  );
                }}
                className={
                  "theme-2 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-2" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-2
              </div>
              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-3"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-3")
                  );
                }}
                className={
                  "theme-3 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-3" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-3
              </div>
              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-4"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-4")
                  );
                }}
                className={
                  "theme-4 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-4" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-4
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-5"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-5")
                  );
                }}
                className={
                  "theme-5 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-5" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-5
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-6"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-6")
                  );
                }}
                className={
                  "theme-6 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-6" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-6
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-7"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-7")
                  );
                }}
                className={
                  "theme-7 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-7" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-7
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-8"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-8")
                  );
                }}
                className={
                  "theme-8 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-8" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-8
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-9"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-9")
                  );
                }}
                className={
                  "theme-9 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-9" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-9
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-10"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-10")
                  );
                }}
                className={
                  "theme-10 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-10" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-10
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-11"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-11")
                  );
                }}
                className={
                  "theme-11 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-11" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-11
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-12"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-12")
                  );
                }}
                className={
                  "theme-12 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-12" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-12
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-13"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-13")
                  );
                }}
                className={
                  "theme-13 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-13" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-13
              </div>

              <div
                onClick={() => {
                  dispatch(SET_THEME("theme-14"));
                  localStorage.setItem(
                    "typo-speed-theme",
                    JSON.stringify("theme-14")
                  );
                }}
                className={
                  "theme-14 bg-light text-darkTest text-center text-[18px] py-1 rounded-md cursor-pointer hover:text-xl border-show  flex justify-center items-center h-[50px]" +
                  " " +
                  (theme === "theme-14" ? "border-[6px]" : "border-[2px]")
                }
              >
                theme-14
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Settings;
