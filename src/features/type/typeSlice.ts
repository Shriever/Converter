import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../../store";

// Define a type for the slice state
interface TypeState {
  conversionType: string;
  firstType: string;
  secondType: string;
}

// Define the initial state using that type
const initialState: TypeState = {
  conversionType: "Mass",
  firstType: "Kilogram",
  secondType: "Pound",
};

export const typeSlice = createSlice({
  name: "type",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeConversion: (state, action: PayloadAction<string>) => {
      state.conversionType = action.payload;
    },
    changeFirst: (state, action: PayloadAction<string>) => {
      state.firstType = action.payload;
    },
    changeSecond: (state, action: PayloadAction<string>) => {
      state.secondType = action.payload;
    },
  },
});

export const { changeConversion, changeFirst, changeSecond } =
  typeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => ({
  first: state.type.firstType,
  second: state.type.secondType,
  conversion: state.type.conversionType,
});

export default typeSlice.reducer;
