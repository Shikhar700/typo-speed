import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  finished: boolean;
};

const initialState: initialStateType = {
  finished: false,
};

const TestFinishedSlice = createSlice({
  name: "test finished",
  initialState: initialState,
  reducers: {
    FINISHED_TRUE: (state) => {
      state.finished = true;
    },
    FINISHED_FALSE: (state) => {
      state.finished = false;
    },
  },
});

export const testFinishedReducer = TestFinishedSlice.reducer;
export const { FINISHED_TRUE, FINISHED_FALSE } = TestFinishedSlice.actions;
