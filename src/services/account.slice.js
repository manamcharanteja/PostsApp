import { createSlice } from "@reduxjs/toolkit";
import { accountApi } from "./account.api";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    postDetails: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      accountApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        state.postDetails = payload;
      }
    );
  },
});
