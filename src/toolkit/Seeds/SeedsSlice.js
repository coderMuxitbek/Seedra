import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    originalData: [],
    filteredData: [],
    userDetails: {
        name: "",
        email: "",
        message: "",
    },
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

        saveUserData: (state, { payload }) => {
            state.userDetails = payload;
        }
    },
});


export default SeedsSlice.reducer;
export const { saveDataToState, updateFilteredData, saveUserData } = SeedsSlice.actions;