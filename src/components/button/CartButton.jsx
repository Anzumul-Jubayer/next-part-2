"use client";
import { CartContext } from "@/context/cartProdvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
  const [inCart, setIncart] = useState(false);
  const {addToCart}=use(CartContext)
  const handleadd2Cart=()=>{
    addToCart(food)
    setIncart(true)
  }
  return (
    <button
      onClick={handleadd2Cart}
      disabled={inCart}
      className="flex-1 rounded-xl border border-orange-500 py-2.5 font-medium text-orange-600 transition hover:bg-orange-50 disabled:bg-gray-100 disabled:text-gray-900"
    >
      {inCart ? "Added" : "Add to cart"}
    </button>
  );
};

export default CartButton;
