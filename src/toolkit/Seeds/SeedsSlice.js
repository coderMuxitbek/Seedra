import { createSlice } from "@reduxjs/toolkit";
import { mainData } from "../../mainData";

const initialState = {
    originalData: mainData,
    filteredData: [],
    cart: []
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

        putCart: (state, {payload})=> {
            state.cart.push(payload)
        }
    },
});


export default SeedsSlice.reducer;
export const { saveDataToState, updateFilteredData, putCart } = SeedsSlice.actions;