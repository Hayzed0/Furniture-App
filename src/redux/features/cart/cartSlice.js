import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
       addToCart: (state,action) => {
        const existingItem = state.cartItems.find(item => item.id === action.payload.id)

        if(!existingItem){
            state.cartItems.push(action.payload)
        } else (
            alert("Item already in Cart")
        )
       },
       removecart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
    }
     }


})

export const { addToCart, removecart } = cartSlice.actions;
export default cartSlice.reducer