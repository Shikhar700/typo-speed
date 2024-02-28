import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  theme: string;
};

if (!localStorage.getItem("typo-speed-theme")) {
  localStorage.setItem("typo-speed-theme", JSON.stringify("theme-9"));
}

const initialState: initialStateType = {
  theme: JSON.parse(localStorage.getItem("typo-speed-theme")!),
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    SET_THEME: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;
export const { SET_THEME } = ThemeSlice.actions;
