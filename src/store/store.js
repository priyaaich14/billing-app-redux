// // store/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import provisionsReducer from "./provisionsSlice";
// import cartReducer from "./cartSlice";

// export const store = configureStore({
//   reducer: {
//     provisions: provisionsReducer,
//     cart: cartReducer,
//   },
// });

/// using redux
// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import provisionsReducer from "./provisionsSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    provisions: provisionsReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});
