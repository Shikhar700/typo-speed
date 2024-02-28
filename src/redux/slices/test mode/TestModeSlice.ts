import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  mode: string;
};

if (!localStorage.getItem("typo-speed-mode")) {
  localStorage.setItem("typo-speed-mode", JSON.stringify("time"));
}

const initialState: initialStateType = {
  mode: JSON.parse(localStorage.getItem("typo-speed-mode")!),
};

const TestModeSlice = createSlice({
  name: "testMode",
  initialState: initialState,
  reducers: {
    CHANGE_MODE: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const testModeReducer = TestModeSlice.reducer;
export const { CHANGE_MODE } = TestModeSlice.actions;
