import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState : {
        items: [],
    },
    reducers : {
        addItem : (state,action) => {
            const itemIndex = state.items.findIndex(item => item.card.info.id == action.payload.card.info.id)
            if(itemIndex >= 0)
            state.items[itemIndex].itemQuantity += 1;
            if(itemIndex == -1){
            const tempItem = {...action.payload,itemQuantity: 1}
            state.items.push(tempItem);
            }
        },
        removeItem : (state,action) => {
            const itemIndex = state.items.findIndex(item => item.card.info.id == action.payload.card.info.id)
            if(itemIndex >= 0)
            state.items[itemIndex].itemQuantity -= 1;
            if(state.items[itemIndex].itemQuantity == 0)
            state.items.splice(itemIndex,1);
            /*const itemId = action.payload.card.info.id;
            state.items = state.items.filter((item) => item.card.info.id !== itemId);*/
        },
        clearCart : (state,action) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;