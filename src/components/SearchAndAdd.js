// // components/SearchAndAdd.js
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addItem } from "../store/cartSlice";

// const SearchAndAdd = () => {
//   const [query, setQuery] = useState("");
//   const provisions = useSelector((state) => state.provisions);
//   const dispatch = useDispatch();

//   const filteredProvisions = provisions.filter((item) =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );

//   const handleAdd = (item) => {
//     dispatch(addItem(item));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search items..."
//       />
//       <p>Total Items Available: {filteredProvisions.length}</p>
//       {query && (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredProvisions.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <button onClick={() => handleAdd(item)}>Add</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchAndAdd;

//using redux
// components/SearchAndAdd.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import { addItem } from "../store/cartSlice";

const SearchAndAdd = () => {
  const query = useSelector((state) => state.search);
  const provisions = useSelector((state) => state.provisions);
  const dispatch = useDispatch();

  const filteredProvisions = provisions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search items..."
      />
      <p>Total Items Available: {provisions.length}</p>
      {query && (
        <div>
          <p>Total Search Items: {filteredProvisions.length}</p>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProvisions.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleAdd(item)}>Add</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default SearchAndAdd;
