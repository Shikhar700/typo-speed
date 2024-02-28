import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  correctWordsCount: number;
};

const initialState: initialStateType = {
  correctWordsCount: 0,
};

const CorrectWordsCountSlice = createSlice({
  name: "correct words count",
  initialState: initialState,
  reducers: {
    SET_CORRECT_WORDS: (state, action: PayloadAction<number>) => {
      state.correctWordsCount = action.payload;
    },
  },
});

export const correctWordsCountReducer = CorrectWordsCountSlice.reducer;
export const { SET_CORRECT_WORDS } = CorrectWordsCountSlice.actions;
