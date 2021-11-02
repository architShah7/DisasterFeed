import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../interfaces/types";

export type FilterState = {
  [index in Filters]: boolean;
};

const initialState: FilterState = {
    Low: true,
    Medium: true,
    High: true,
    Critical: true,
    Fire: true,
    Flood: true,
    Power: true,
    Medical: true,
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters(state, { payload }: PayloadAction<Filters>) {
      state[payload] = !state[payload];
    },
  },
});

export const { updateFilters } = filters.actions;

export default filters.reducer;
