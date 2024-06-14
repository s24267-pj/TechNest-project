import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const TestCart = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const testProduct = { id: 1, name: "Test Product", price: 100 };

  return (
    <div>
      <h2>Test Cart</h2>
      <button onClick={() => addToCart(testProduct)}>Add Test Product</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestCart;
