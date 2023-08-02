import { createSlice } from "@reduxjs/toolkit";
import { getAllSlides } from "./slidesAction";

const initialState = {
  slidesLoading: false,
  slidesList: [],
};

const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
  extraReducers: {
    // =======================================REDUCER TO GET ALL slides
    [getAllSlides.pending]: (state, { payload }) => {
      state.slidesLoading = true;
    },
    [getAllSlides.fulfilled]: (state, { payload }) => {
      state.slidesLoading = false;
      state.slidesList = payload.data;
    },
    [getAllSlides.rejected]: (state, { payload }) => {
      state.slidesLoading = false;
    },
  },
});

export default slidesSlice.reducer;
export const {} = slidesSlice.actions;
