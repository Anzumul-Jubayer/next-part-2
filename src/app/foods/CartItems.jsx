'use client'
import { CartContext } from '@/context/cartProdvider';
import React, { use } from 'react';

const CartItems = () => {
    const {cart}=use(CartContext)
    return (
        <div>
           <p className="mt-3 text-gray-500">{cart.length} Items Added</p> 
        </div>
    );
};

export default CartItems;