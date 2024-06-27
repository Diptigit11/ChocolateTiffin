import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.get(`${baseURL}/api/cart`, { withCredentials: true });
        setCart(response.data?.items || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/add`, item, { withCredentials: true });
      setCart(response.data.items);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/cart/remove/${itemId}`, { withCredentials: true });
      setCart(response.data.items);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
