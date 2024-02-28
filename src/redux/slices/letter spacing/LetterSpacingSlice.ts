import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  letterSpacing: string;
};

if (!localStorage.getItem("typo-speed-letterSpacing")) {
  localStorage.setItem("typo-speed-letterSpacing", JSON.stringify("small"));
}

const initialState: initialStateType = {
  letterSpacing: JSON.parse(localStorage.getItem("typo-speed-letterSpacing")!),
};

const LetterSpacingSlice = createSlice({
  name: "letter spacing",
  initialState: initialState,
  reducers: {
    LETTER_SPACING_SMALL: (state) => {
      state.letterSpacing = "small";
    },
    LETTER_SPACING_MEDIUM: (state) => {
      state.letterSpacing = "medium";
    },
    LETTER_SPACING_LARGE: (state) => {
      state.letterSpacing = "large";
    },
  },
});

export const letterSpacingReducer = LetterSpacingSlice.reducer;
export const {
  LETTER_SPACING_SMALL,
  LETTER_SPACING_MEDIUM,
  LETTER_SPACING_LARGE,
} = LetterSpacingSlice.actions;
