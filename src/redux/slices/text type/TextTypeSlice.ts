import { createSlice } from "@reduxjs/toolkit";
import { checkTextTypePresent } from "./checkTextTypePresent";

export type initialStateType = {
  textType: {
    lowercase: boolean;
    uppercase: boolean;
    camelcase: boolean;
    mixedcase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
};

export type textTypeType = {
  lowercase: boolean;
  uppercase: boolean;
  camelcase: boolean;
  mixedcase: boolean;
  numbers: boolean;
  symbols: boolean;
};

if (!localStorage.getItem("typo-speed-textType")) {
  localStorage.setItem(
    "typo-speed-textType",
    JSON.stringify({
      lowercase: true,
      uppercase: false,
      camelcase: false,
      mixedcase: false,
      numbers: false,
      symbols: false,
    })
  );
}

const initialState: initialStateType = {
  textType: JSON.parse(localStorage.getItem("typo-speed-textType")!),
};

const TextTypeSlice = createSlice({
  name: "text type",
  initialState: initialState,
  reducers: {
    TYPE_LOWERCASE: (state) => {
      if (checkTextTypePresent(state, state.textType.lowercase)) {
        state.textType.lowercase
          ? (state.textType.lowercase = false)
          : (state.textType.lowercase = true);
      } else {
        state.textType.lowercase = state.textType.lowercase;
      }
    },
    TYPE_UPPERCASE: (state) => {
      if (checkTextTypePresent(state, state.textType.uppercase)) {
        state.textType.uppercase
          ? (state.textType.uppercase = false)
          : (state.textType.uppercase = true);
      } else {
        state.textType.uppercase = state.textType.uppercase;
      }
    },
    TYPE_CAMELCASE: (state) => {
      if (checkTextTypePresent(state, state.textType.camelcase)) {
        state.textType.camelcase
          ? (state.textType.camelcase = false)
          : (state.textType.camelcase = true);
      } else {
        state.textType.camelcase = state.textType.camelcase;
      }
    },
    TYPE_MIXEDCASE: (state) => {
      if (checkTextTypePresent(state, state.textType.mixedcase)) {
        state.textType.mixedcase
          ? (state.textType.mixedcase = false)
          : (state.textType.mixedcase = true);
      } else {
        state.textType.mixedcase = state.textType.mixedcase;
      }
    },
    TYPE_NUMBERS: (state) => {
      if (checkTextTypePresent(state, state.textType.numbers)) {
        state.textType.numbers
          ? (state.textType.numbers = false)
          : (state.textType.numbers = true);
      } else {
        state.textType.numbers = state.textType.numbers;
      }
    },
    TYPE_SYMBOLS: (state) => {
      if (checkTextTypePresent(state, state.textType.symbols)) {
        state.textType.symbols
          ? (state.textType.symbols = false)
          : (state.textType.symbols = true);
      } else {
        state.textType.symbols = state.textType.symbols;
      }
    },
  },
});

export const textTypeReducer = TextTypeSlice.reducer;
export const {
  TYPE_LOWERCASE,
  TYPE_UPPERCASE,
  TYPE_CAMELCASE,
  TYPE_MIXEDCASE,
  TYPE_NUMBERS,
  TYPE_SYMBOLS,
} = TextTypeSlice.actions;
