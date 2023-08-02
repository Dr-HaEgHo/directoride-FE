import { createSlice } from "@reduxjs/toolkit";
import { getAllRiders } from "./ridersAction";


const initialState = {
    ridersLoading: false,
    ridersList: [],
    riderGotten: false,
}

const riderSlice = createSlice({
    name: 'riders',
    initialState,
    reducers: {},
    extraReducers: {

        // =======================================REDUCER TO GET ALL RIDERS
        [getAllRiders.pending]: (state, {payload}) => {
            state.ridersLoading = true
        },
        [getAllRiders.fulfilled]: (state, {payload}) => {
            state.ridersLoading = false;
            state.riderGotten = false;
            state.ridersList = payload.data.data;
        },
        [getAllRiders.rejected]: (state, {payload}) => {
            state.ridersLoading = false;
        },
    }
})

export default riderSlice.reducer;
export const { } = riderSlice.actions;