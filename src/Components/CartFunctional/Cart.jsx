import React, { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../CartContext';

function Cart() {
  const { cart, getCake, deleteCake } = useCart();  // Taking out functions from context 

  // Fetch and display cake in cart and update icon in navbar
  useEffect(() => {
    getCake();
  }, []);

  // Remove cake from cart and update icon in navbar
  const handleRemove = (itemId) => {
    deleteCake(itemId);
  };

  // Calculate the subtotal price
  const calculateSubtotal = () => {
    return cart?.reduce((total, item) => {
      const selectedWeight = item.weightOptions?.[0];
      const price = selectedWeight ? selectedWeight.price : 0;
      return total + price * (item.quantity || 0);
    }, 0) || 0;
  };

  // Ensure cart is always an array
  const cartItems = Array.isArray(cart) ? cart : [];

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4 p-4 border rounded-lg">
            <div className="flex items-center">
              <img src={item.src} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Weight: {item.weightOptions?.[0]?.weight || 'N/A'}</p>
                <p>Price: ₹ {item.weightOptions?.[0]?.price || 0}</p>
                <p>Quantity: {item.quantity || 0}</p>
                <p>Total: ₹ {item.weightOptions?.[0]?.price * (item.quantity || 0)}</p>
              </div>
            </div>
            <button onClick={() => handleRemove(item._id)} className="text-red-500">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="mt-4 text-right">
          <p className="text-xl font-bold">
            Subtotal: ₹ {calculateSubtotal()}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
