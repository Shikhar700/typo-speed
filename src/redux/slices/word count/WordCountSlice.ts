import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  count: number;
};

const initialState: initialStateType = {
  count: 0,
};

const WordCountSlice = createSlice({
  name: "word count",
  initialState: initialState,
  reducers: {
    SET_COUNT: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    DECREMENT_COUNT: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const wordCountReducer = WordCountSlice.reducer;
export const { SET_COUNT, DECREMENT_COUNT } = WordCountSlice.actions;
