
"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [item, ...prev]);
  };

  const cartInfo = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;