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

        putCart: (state, { payload }) => {
            state.cart.push(payload);
            const pepe = state.cart.filter((obj) => obj.id !== payload.id)
            console.log(pepe);
            state.cart === pepe

        }
    },
});


export default SeedsSlice.reducer;
export const { saveDataToState, updateFilteredData, putCart } = SeedsSlice.actions;