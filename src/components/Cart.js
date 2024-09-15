// // components/Cart.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
// } from "../store/cartSlice";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h2>Order Items</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Sub Total</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.quantity}</td>
//               <td>{item.price * item.quantity}</td>
//               <td>
//                 <button onClick={() => dispatch(increaseQuantity(item.id))}>
//                   +
//                 </button>
//                 <button onClick={() => dispatch(decreaseQuantity(item.id))}>
//                   -
//                 </button>
//                 <button onClick={() => dispatch(removeItem(item.id))}>x</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h3>Total - {total}</h3>
//     </div>
//   );
// };

// export default Cart;

// using redux
// components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Items</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeItem(item.id))}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total - {total}</h3>
    </div>
  );
};

export default Cart;
