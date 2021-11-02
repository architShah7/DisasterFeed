import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, Post } from "../../interfaces/types";

export interface PostState {
  postFeed: Post[];
  counts: {
    [key in Filters.LOW | Filters.MEDIUM | Filters.HIGH | Filters.CRITICAL]: {
      [key2 in
        | Filters.FIRE
        | Filters.FLOOD
        | Filters.MEDICAL
        | Filters.POWER]: number;
    };
  };
}

const initialState: PostState = {
  postFeed: [],
  counts: {
    [Filters.LOW]: {
      [Filters.FIRE]: 0,
      [Filters.FLOOD]: 0,
      [Filters.MEDICAL]: 0,
      [Filters.POWER]: 0,
    },
    [Filters.MEDIUM]: {
      [Filters.FIRE]: 0,
      [Filters.FLOOD]: 0,
      [Filters.MEDICAL]: 0,
      [Filters.POWER]: 0,
    },
    [Filters.HIGH]: {
      [Filters.FIRE]: 0,
      [Filters.FLOOD]: 0,
      [Filters.MEDICAL]: 0,
      [Filters.POWER]: 0,
    },
    [Filters.CRITICAL]: {
      [Filters.FIRE]: 0,
      [Filters.FLOOD]: 0,
      [Filters.MEDICAL]: 0,
      [Filters.POWER]: 0,
    },
  },
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<Post>) {
      state.postFeed = [...state.postFeed, payload];
    },
    updateCounts(state, { payload, }:
      PayloadAction<{
        priority:
          | Filters.LOW
          | Filters.MEDIUM
          | Filters.HIGH
          | Filters.CRITICAL;
        problem: Filters.FIRE | Filters.FLOOD | Filters.MEDICAL | Filters.POWER;
      }>
    ) {
      state.counts[payload.priority][payload.problem] += 1;
    },
  },
});

export const { add, updateCounts } = posts.actions;

export default posts.reducer;
