// // store/provisionsSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 1, name: "Bread", price: 30 },
//   { id: 2, name: "Milk", price: 25 },
//   { id: 3, name: "Eggs", price: 60 },
//   { id: 4, name: "Cheese", price: 80 },
//   { id: 5, name: "Butter", price: 50 },
//   { id: 6, name: "Apples", price: 120 },
//   { id: 7, name: "Bananas", price: 40 },
//   { id: 8, name: "Orange Juice", price: 90 },
//   { id: 9, name: "Chicken Breast", price: 250 },
//   { id: 10, name: "Ground Beef", price: 400 },
//   { id: 11, name: "Rice", price: 60 },
//   { id: 12, name: "Pasta", price: 70 },
//   { id: 13, name: "Tomatoes", price: 30 },
//   { id: 14, name: "Potatoes", price: 40 },
//   { id: 15, name: "Onions", price: 25 },
//   { id: 16, name: "Garlic", price: 100 },
//   { id: 17, name: "Yogurt", price: 50 },
//   { id: 18, name: "Cereal", price: 200 },
//   { id: 19, name: "Peanut Butter", price: 150 },
//   { id: 20, name: "Jam", price: 120 },
// ];

// const provisionsSlice = createSlice({
//   name: "provisions",
//   initialState,
//   reducers: {},
// });

// export default provisionsSlice.reducer;

//using only redux

// store/provisionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Bread", price: 30 },
  { id: 2, name: "Milk", price: 25 },
  { id: 3, name: "Eggs", price: 60 },
  { id: 4, name: "Cheese", price: 80 },
  { id: 5, name: "Butter", price: 50 },
  { id: 6, name: "Apples", price: 120 },
  { id: 7, name: "Bananas", price: 40 },
  { id: 8, name: "Orange Juice", price: 90 },
  { id: 9, name: "Chicken Breast", price: 250 },
  { id: 10, name: "Ground Beef", price: 400 },
  { id: 11, name: "Rice", price: 60 },
  { id: 12, name: "Pasta", price: 70 },
  { id: 13, name: "Tomatoes", price: 30 },
  { id: 14, name: "Potatoes", price: 40 },
  { id: 15, name: "Onions", price: 25 },
  { id: 16, name: "Garlic", price: 100 },
  { id: 17, name: "Yogurt", price: 50 },
  { id: 18, name: "Cereal", price: 200 },
  { id: 19, name: "Peanut Butter", price: 150 },
  { id: 20, name: "Jam", price: 120 },
];

const provisionsSlice = createSlice({
  name: "provisions",
  initialState,
  reducers: {},
});

export default provisionsSlice.reducer;
