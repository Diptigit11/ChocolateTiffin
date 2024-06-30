import CartContext from "./CartContext";
import {useState} from "react";

const CartState = (props) => {
  const host = "http://localhost:5000";
  const cakeInitial = [];
  const [cakes, setCake] = useState(cakeInitial);

  // Get all cakes
  const getCake = async () => {
    // API call
    const response = await fetch(`${host}/api/cart/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);
    setCake(json);
  };

  // Add a cake
  const addCake = async (title, src, description, rating, weightOptions, category) => {
    // API call
    const response = await fetch(`${host}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZmU1MWE1Mzk3YTMzOTE1MWFhZjNiIn0sImlhdCI6MTcxOTY1Nzc1NH0.0iiyAE0xa5dZrJd8ceWD3TD7E5sMEwJPPa_rP4Cqc8E"
      },
      body: JSON.stringify({ title, src, description, rating, weightOptions, category }),
    });
    const cake = await response.json();
    setCake(cakes.concat(cake));
  };

  // Delete a cake
  const deleteCake = async (id) => {
    const response = await fetch(`${host}/api/cart/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);

    const newCake = cakes.filter((cake) => cake._id !== id);
    setCake(newCake);
  };

  return (
    <CartContext.Provider value={{ cakes, getCake, addCake, deleteCake }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
