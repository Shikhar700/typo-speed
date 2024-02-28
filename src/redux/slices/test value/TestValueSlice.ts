import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  value: number;
};

if (!localStorage.getItem("typo-speed-value")) {
  localStorage.setItem("typo-speed-value", JSON.stringify(60));
}

const initialState: initialStateType = {
  value: JSON.parse(localStorage.getItem("typo-speed-value")!),
};

const TestValueSlice = createSlice({
  name: "testValue",
  initialState: initialState,
  reducers: {
    CHANGE_VALUE: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const testValueReducer = TestValueSlice.reducer;
export const { CHANGE_VALUE } = TestValueSlice.actions;
