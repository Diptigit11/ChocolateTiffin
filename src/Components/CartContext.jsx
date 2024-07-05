// CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [totalItems, setTotalItems] = useState(0);
  const [cart, setCart] = useState([]);

  // const fetchTotalItems = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/cart/total", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //     });
  //     setTotalItems(response.data.totalItems);
  //   } catch (error) {
  //     console.error("Error fetching total items:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTotalItems();
  // }, []);

  const addCake = async (name, src, description, rating, weightOptions, category, quantity) => {
    const response = await fetch(`http://localhost:5000/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, src, description, rating, weightOptions, category, quantity }), // Include quantity
    });
    const cake = await response.json();
    return cake;
  };
  
  const getCake = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/fetch`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      const textResponse = await response.text(); // Fetch response as text
      console.log('Raw response:', textResponse); // Log the raw response

      try {
        const json = JSON.parse(textResponse); // Attempt to parse the JSON
        console.log('Fetched cart data:', json);
        setCart(json);
      } catch (jsonParseError) {
        console.error('Failed to parse JSON response:', jsonParseError);
        console.error('Received text response:', textResponse);
      }
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  };

  // useEffect(() => {
  //   getCake();
  // }, []);

  const deleteCake = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log('Deleted item response:', json);

      const newCart = cart.filter((item) => item._id !== id);
      setCart(newCart);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const submitReview = async (name, rating, title, review, productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/review/add/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ name, rating, title, review })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      throw error;
    }
  };

  const fetchReviews = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/review/fetchreview/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      throw error;
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/review/deletereview/${reviewId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Failed to delete review:', error);
      throw error;
    }
  };


  return (
    <CartContext.Provider value={{cart,setCart,addCake,getCake,deleteCake,submitReview,fetchReviews,deleteReview  }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
