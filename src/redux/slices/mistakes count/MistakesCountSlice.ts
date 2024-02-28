import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  mistakesCount: number;
};

const initialState: initialStateType = {
  mistakesCount: 0,
};

const MistakesCountSlice = createSlice({
  name: "mistakes count",
  initialState: initialState,
  reducers: {
    SET_MISTAKES_COUNT: (state, action: PayloadAction<number>) => {
      state.mistakesCount = action.payload;
    },
  },
});

export const mistakesCountReducer = MistakesCountSlice.reducer;
export const { SET_MISTAKES_COUNT } = MistakesCountSlice.actions;
