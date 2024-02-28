import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  timeTaken: number;
};

const initialState: initialStateType = {
  timeTaken: 0,
};

const TimeTakenSlice = createSlice({
  name: "time taken",
  initialState: initialState,
  reducers: {
    SET_TIME_TAKEN: (state, action: PayloadAction<number>) => {
      state.timeTaken = action.payload;
    },
  },
});

export const timeTakenReducer = TimeTakenSlice.reducer;
export const { SET_TIME_TAKEN } = TimeTakenSlice.actions;
