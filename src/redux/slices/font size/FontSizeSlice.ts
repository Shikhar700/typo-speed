import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  fontSize: string;
};

if (!localStorage.getItem("typo-speed-fontSize")) {
  localStorage.setItem("typo-speed-fontSize", JSON.stringify("small"));
}

const initialState: initialStateType = {
  fontSize: JSON.parse(localStorage.getItem("typo-speed-fontSize")!),
};

const FontSizeSlice = createSlice({
  name: "font size",
  initialState: initialState,
  reducers: {
    FONT_SMALL: (state) => {
      state.fontSize = "small";
    },
    FONT_MEDIUM: (state) => {
      state.fontSize = "medium";
    },
    FONT_LARGE: (state) => {
      state.fontSize = "large";
    },
  },
});

export const fontSizeReducer = FontSizeSlice.reducer;
export const { FONT_SMALL, FONT_MEDIUM, FONT_LARGE } = FontSizeSlice.actions;
