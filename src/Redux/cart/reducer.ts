import { createSlice } from "@reduxjs/toolkit/dist";
import { ICartState } from "../../Interface/Interface";
import { getFromStorage, saveToStorage } from "../../Utils/Localstorage";

// отримання "корзини" з localStorage
const getInitialStateFromStorage = () => {
  const data = getFromStorage("phones");
  return data ? { itemInCart: JSON.parse(data) } : { itemInCart: [] };
};


// ініціалізація початкового стейту корзини
const initialState: ICartState = getInitialStateFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // додавання елемента в корзину
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemInCart.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.itemInCart.push(newItem);
      } else {
        existingItem.count += 1;
      }
      saveToStorage("phones", state.itemInCart);
    },
    // видаленя елемента з корзини
    removeItemFromCart(state, action) {
      state.itemInCart = state.itemInCart.filter(
        (item) => item.id !== action.payload
      );
      saveToStorage("phones", state.itemInCart);
    },
    // збільшення елемента в корзині на 1
    onIncrease(state, action) {
      state.itemInCart.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
      saveToStorage("phones", state.itemInCart);
    },
    // зменшення елемента в корзині на 1
    onDecrease(state, action) {
      state.itemInCart.map((item) => {
        if (item.id === action.payload) {
          item.count--;
          if (item.count === 0) {
            state.itemInCart = state.itemInCart.filter(
              (cartItem) => cartItem.id !== item.id
            );
          }
        }
      });
      saveToStorage("phones", state.itemInCart);
    },
  },
});

export const { addItemToCart, removeItemFromCart, onIncrease, onDecrease } =
  cartSlice.actions;
export default cartSlice.reducer;
