// pages/orders.js
import React from 'react';
import Cart from '../components/Cart';

export default function Orders({ cartItems, removeFromCart }) {
  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
