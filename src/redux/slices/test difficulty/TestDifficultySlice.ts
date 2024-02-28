import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  testDifficulty: string;
};

if (!localStorage.getItem("typo-speed-testDifficulty")) {
  localStorage.setItem("typo-speed-testDifficulty", JSON.stringify("easy"));
}

const initialState: initialStateType = {
  testDifficulty: JSON.parse(
    localStorage.getItem("typo-speed-testDifficulty")!
  ),
};

const TestDifficultySlice = createSlice({
  name: "test difficulty",
  initialState: initialState,
  reducers: {
    DIFFICULTY_EASY: (state) => {
      state.testDifficulty = "easy";
    },
    DIFFICULTY_MEDIUM: (state) => {
      state.testDifficulty = "medium";
    },
    DIFFICULTY_HARD: (state) => {
      state.testDifficulty = "hard";
    },
  },
});

export const testDifficultyReducer = TestDifficultySlice.reducer;
export const { DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD } =
  TestDifficultySlice.actions;
