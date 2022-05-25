import { createSlice } from '@reduxjs/toolkit'


const initialState={
    checkOutItems: [],
    checkOutQuantity: 0,
    checkOutTotalAmount:0
}
const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckOut(state, action) {
            state.checkOutItems.push(action.payload);
           
        }

      },
})

export const { addToCheckOut} = checkoutSlice.actions;

export default checkoutSlice.reducer;