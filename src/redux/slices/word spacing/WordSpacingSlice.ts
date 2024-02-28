import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  wordSpacing: string;
};

if (!localStorage.getItem("typo-speed-wordSpacing")) {
  localStorage.setItem("typo-speed-wordSpacing", JSON.stringify("small"));
}

const initialState: initialStateType = {
  wordSpacing: JSON.parse(localStorage.getItem("typo-speed-wordSpacing")!),
};

const WordSpacingSlice = createSlice({
  name: "word spacing",
  initialState: initialState,
  reducers: {
    WORD_SPACING_SMALL: (state) => {
      state.wordSpacing = "small";
    },
    WORD_SPACING_MEDIUM: (state) => {
      state.wordSpacing = "medium";
    },
    WORD_SPACING_LARGE: (state) => {
      state.wordSpacing = "large";
    },
  },
});

export const wordSpacingReducer = WordSpacingSlice.reducer;
export const { WORD_SPACING_SMALL, WORD_SPACING_MEDIUM, WORD_SPACING_LARGE } =
  WordSpacingSlice.actions;
