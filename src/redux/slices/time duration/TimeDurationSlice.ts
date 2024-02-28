import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  duration: number;
};

const initialState: initialStateType = {
  duration: 0,
};

const TimeDurationSlice = createSlice({
  name: "time duration",
  initialState: initialState,
  reducers: {
    SET_DURATION: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    DECREMENT_DURATION: (state) => {
      state.duration = state.duration - 1;
    },
  },
});

export const timeDurationReducer = TimeDurationSlice.reducer;
export const { SET_DURATION, DECREMENT_DURATION } = TimeDurationSlice.actions;
