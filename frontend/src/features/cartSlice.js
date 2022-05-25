import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify"


const initialState={
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount:0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // if this is true it means we have item in cart
            // we use findintex to check the perticular item in the cart
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // greater than 0 that means item is already in cart increment by +1
                state.cartItems[itemIndex].cartQuantity += 1;//increment

                toast.success(`increased ${state.cartItems[itemIndex].title} cart quantity`, {
                   position:"bottom-left",
               })
            } else {
                // if not available item in the cart push 
                const tempProduct = {...action.payload, cartQuantity:1}
                state.cartItems.push(tempProduct);
                
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        // remove item from cart

        removeFromCart(state, action) {
           const nextCartItems = state.cartItems.filter(
                (cartItem)=> cartItem.id !==action.payload.id
            );
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.title} remove from cart`, {
                position:"bottom-left",
            })
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id

            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info(`Decreased ${action.payload.title} cart quantity`, {
                    position:"bottom-left",
                })
                
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem)=> cartItem.id !==action.payload.id
                );
                state.cartItems = nextCartItems
                
                toast.dark(`${action.payload.title} remove from cart`, {
                    position:"bottom-left",
                })
                
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        
        clearCart(state, action) {
            state.cartItems = [];
            toast.error('Cart cleared', {
                position: "bottom-left",
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((
                cartTotal, cartItem) => { 
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                
                return cartTotal
            }, {
                total: 0, //initial value
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }

      },
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;