import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  quickRestart: string;
};

if (!localStorage.getItem("typo-speed-quickRestart")) {
  localStorage.setItem("typo-speed-quickRestart", JSON.stringify("off"));
}

const initialState: initialStateType = {
  quickRestart: JSON.parse(localStorage.getItem("typo-speed-quickRestart")!),
};

const QuickRestartSlice = createSlice({
  name: "quick restart",
  initialState: initialState,
  reducers: {
    QUICK_RESTART_OFF: (state) => {
      state.quickRestart = "off";
    },
    QUICK_RESTART_ESC: (state) => {
      state.quickRestart = "esc";
    },
    QUICK_RESTART_ENTER: (state) => {
      state.quickRestart = "enter";
    },
  },
});

export const quickRestartReducer = QuickRestartSlice.reducer;
export const { QUICK_RESTART_OFF, QUICK_RESTART_ESC, QUICK_RESTART_ENTER } =
  QuickRestartSlice.actions;
