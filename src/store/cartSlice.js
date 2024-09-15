// // store/cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addItem: (state, action) => {
//       const item = state.find((i) => i.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeItem: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.find((i) => i.id === action.payload);
//       if (item) item.quantity += 1;
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.find((i) => i.id === action.payload);
//       if (item && item.quantity > 1) item.quantity -= 1;
//     },
//   },
// });

// export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
//   cartSlice.actions;
// export default cartSlice.reducer;

//using only redux
// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
