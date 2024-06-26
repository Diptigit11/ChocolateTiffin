import React, { useContext } from 'react';
import CartContext from './CartContext';
import { TrashIcon } from '@heroicons/react/24/outline'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.selectedWeight.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4 p-4 border rounded-lg">
            <div className="flex items-center">
              <img src={item.src} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Weight: {item.selectedWeight.weight}</p>
                <p>Price: ₹ {item.selectedWeight.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹ {item.selectedWeight.price * item.quantity}</p>
              </div>
            </div>
            <button onClick={() => handleRemove(index)} className="text-red-500">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="mt-4 text-right">
          <p className="text-xl font-bold">
            Subtotal: ₹ {calculateSubtotal()}
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded mt-4">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
