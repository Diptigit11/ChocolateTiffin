// Cart.jsx
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('/api/cart');
        if (response.status === 401) {
          window.location.href = '/login';
        } else {
          const data = await response.json();
          setCart(data);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items.map((item) => (
        <div key={item.productId} className="cart-item">
          <div>
            <h2>{item.name}</h2>
            <p>{item.quantity} x ₹{item.price}</p>
          </div>
        </div>
      ))}
      <div>
        <p>Total Products: {cart.items.length}</p>
        <p>Total Amount: ₹{cart.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <button className="bg-red-600 text-white px-6 py-3 rounded">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
