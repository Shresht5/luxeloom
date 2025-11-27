import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartData: [],
};

const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        removeCart: (state, action) => {
            state.cartData = state.cartData.filter((data, i) => i !== action.payload)
        },
        addCart: (state, action) => {
            state.cartData = [...state.cartData, action.payload];
        },
    },
});

export const { addCart, removeCart } = cartDataSlice.actions;
export default cartDataSlice.reducer;