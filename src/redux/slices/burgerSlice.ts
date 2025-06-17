import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BurgerState } from "../../types/types";

const initialState: BurgerState = {
  burger: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    changeBurgerState: (state, action: PayloadAction<boolean>) => {
      state.burger = action.payload;
    },
  },
});

export const { changeBurgerState } = burgerSlice.actions;
export default burgerSlice.reducer;
