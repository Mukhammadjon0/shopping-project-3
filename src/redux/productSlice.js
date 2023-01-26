import { createSlice } from "@reduxjs/toolkit";

const prodInitialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const productSlice = createSlice({
  name: "basket",
  initialState:prodInitialState,
  reducers: {
    addToBasket: (state, action) => {
      return (state = {
        ...state,
        basket: [...state.basket, action.payload],
      });
    },
    deleteProd: (state, action) => {
        const filteredUsers = state.basket.filter(
          (item) => item.id !== action.payload
        );
        state.basket = filteredUsers;
      },

  },
});
console.log(prodInitialState.basket)

export const {addToBasket, deleteProd}=productSlice.actions
export default productSlice.reducer