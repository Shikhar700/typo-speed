import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  blur: boolean;
};

const initialState: initialStateType = {
  blur: false,
};

const BlurBgSlice = createSlice({
  name: "BlurBg",
  initialState: initialState,
  reducers: {
    ADD_BLUR: (state) => {
      state.blur = true;
    },
    REMOVE_BLUR: (state) => {
      state.blur = false;
    },
  },
});

export const blurBgReducer = BlurBgSlice.reducer;
export const { ADD_BLUR, REMOVE_BLUR } = BlurBgSlice.actions;
