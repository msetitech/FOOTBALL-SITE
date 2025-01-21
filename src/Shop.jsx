// import React, { useState, useEffect } from "react";

// const productsData = [
//   {
//     id: 1,
//     name: "Inter Miami Jersey",
//     price: 59.99,
//     image: "https://picsum.photos/200/300?random=1",
//   },
//   {
//     id: 2,
//     name: "Inter Miami Cap",
//     price: 19.99,
//     image: "https://picsum.photos/200/300?random=2",
//   },
//   {
//     id: 3,
//     name: "Inter Miami Scarf",
//     price: 14.99,
//     image: "https://picsum.photos/200/300?random=3",
//   },
//   {
//     id: 4,
//     name: "Inter Miami Mug",
//     price: 12.99,
//     image: "https://picsum.photos/200/300?random=4",
//   },
// ];

// export default function Shop({ onAddToCart }) {
//   return (
//     <div className="shop">
//       <h1>Inter Miami Shop</h1>
//       <div className="shop-container">
//         {productsData.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <h2>{product.name}</h2>
//             <p>${product.price.toFixed(2)}</p>
//             <button onClick={() => onAddToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Shop() {
  return <div>Shop</div>;
}
