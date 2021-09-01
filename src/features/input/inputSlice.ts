import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../../store";

// Define a type for the slice state
interface inputState {
  firstValue: string;
  secondValue: string;
}

// Define the initial state using that type
const initialState: inputState = {
  firstValue: "",
  secondValue: "",
};

export const inputSlice = createSlice({
  name: "input",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateInputValue: (state, action: PayloadAction<string>) => {
      state.firstValue = action.payload;
    },
  },
});

export const { updateInputValue } = inputSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => ({
  firstValue: state.input.firstValue,
  secondValue: state.input.firstValue,
});

export default inputSlice.reducer;
