import { configureStore } from "@reduxjs/toolkit";
import { testModeReducer } from "./slices/test mode/TestModeSlice";
import { testValueReducer } from "./slices/test value/TestValueSlice";
import { blurBgReducer } from "./slices/blur bg/BlurBgSlice";
import { timeDurationReducer } from "./slices/time duration/TimeDurationSlice";
import { wordCountReducer } from "./slices/word count/WordCountSlice";
import { settingChangedReducer } from "./slices/setting changed/SettingChangedSlice";
import { testFinishedReducer } from "./slices/test finished/TestFinishedSlice";
import { correctWordsCountReducer } from "./slices/correct words count/CorrectWordsCountSlice";
import { mistakesCountReducer } from "./slices/mistakes count/MistakesCountSlice";
import { timeTakenReducer } from "./slices/time taken/TimeTakenSlice";
import { keyPressCountReducer } from "./slices/key press count/KeyPressCountSlice";
import { quickRestartReducer } from "./slices/quick restart/QuickRestartSlice";
import { testDifficultyReducer } from "./slices/test difficulty/TestDifficultySlice";
import { textTypeReducer } from "./slices/text type/TextTypeSlice";
import { fontSizeReducer } from "./slices/font size/FontSizeSlice";
import { letterSpacingReducer } from "./slices/letter spacing/LetterSpacingSlice";
import { wordSpacingReducer } from "./slices/word spacing/WordSpacingSlice";
import { themeReducer } from "./slices/theme/ThemeSlice";

const store = configureStore({
  reducer: {
    testMode: testModeReducer,
    testValue: testValueReducer,
    blurBg: blurBgReducer,
    timeDuration: timeDurationReducer,
    wordCount: wordCountReducer,
    settingChanged: settingChangedReducer,
    testFinished: testFinishedReducer,
    correctWordsCount: correctWordsCountReducer,
    mistakesCount: mistakesCountReducer,
    timeTaken: timeTakenReducer,
    keyPressCount: keyPressCountReducer,
    quickRestart: quickRestartReducer,
    testDifficulty: testDifficultyReducer,
    textType: textTypeReducer,
    fontSize: fontSizeReducer,
    letterSpacing: letterSpacingReducer,
    wordSpacing: wordSpacingReducer,
    theme: themeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
