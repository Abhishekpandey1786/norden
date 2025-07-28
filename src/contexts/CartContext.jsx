// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
    
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

 
  const removeFromCart = (productIdToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productIdToRemove) 
    );
  };

  
  const clearCart = () => {
    setCartItems([]);
  };

 
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};