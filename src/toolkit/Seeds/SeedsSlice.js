import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    originalData: [],
    filteredData: [],
}

const SeedsSlice = createSlice({
    name: "SeedsSlice",
    initialState,
    reducers: {
        saveDataToState: (state, { payload }) => {
            state.originalData = payload;
            state.filteredData = payload;
        },

        updateFilteredData: (state, { payload }) => {
            state.filteredData = payload;
        },
    },
});


export default SeedsSlice.reducer;
export const { saveDataToState, updateFilteredData } = SeedsSlice.actions;