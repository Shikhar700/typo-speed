import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  keyPressCount: number;
};

const initialState: initialStateType = {
  keyPressCount: 0,
};

const KeyPressCountSlice = createSlice({
  name: "key press count",
  initialState: initialState,
  reducers: {
    SET_KEYPRESS_COUNT: (state, action: PayloadAction<number>) => {
      state.keyPressCount = action.payload;
    },
  },
});

export const keyPressCountReducer = KeyPressCountSlice.reducer;
export const { SET_KEYPRESS_COUNT } = KeyPressCountSlice.actions;
