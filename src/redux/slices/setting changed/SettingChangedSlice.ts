import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isChanged: boolean;
};

const initialState: initialStateType = {
  isChanged: false,
};

const SettingChangedSlice = createSlice({
  name: "setting changed",
  initialState: initialState,
  reducers: {
    CHANGE_IS_CHANGED: (state) => {
      state.isChanged = !state.isChanged;
    },
  },
});

export const settingChangedReducer = SettingChangedSlice.reducer;
export const { CHANGE_IS_CHANGED } = SettingChangedSlice.actions;
