import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
  toast: { visible: false, message: '' }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find((product) => product.id === action.payload.id);
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
        state.toast = { visible: true, message: `"${action.payload.name}" added to cart!` };
        state.selectedItems = setSelectedItems(state);
        state.totalPrice = setTotalPrice(state);
        state.tax = setTax(state);
        state.grandTotal = setGrandTotal(state);
      } else {
        state.toast = { visible: true, message: `"${action.payload.name}" is already in your cart!` };
      }
    },
    clearToast: (state) => {
      state.toast = { visible: false, message: '' };
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        if (type === 'increment') {
          product.quantity += 1;
        } else if (type === 'decrement' && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    }
  }
});

export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => setTotalPrice(state) + setTax(state);

export const { addToCart, removeFromCart, updateQuantity, clearCart, clearToast } = cartSlice.actions;
export default cartSlice.reducer;