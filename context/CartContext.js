import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

// Creating Context
const cartContext = createContext();

function CartContext({ children }) {
  const [sahowCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // Inc or Dec the quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  // Adding meals in cart
  const onAdd = (mealName, mealPrice, mealId, quantity) => {
    const checkmealInCart = cartItems.find((item) => item.id === mealId);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + mealPrice * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkmealInCart) {
      const updatedCartItems = cartItems.map((cartmeal) => {
        if (cartmeal.id === mealId)
          return {
            ...cartmeal,
            quantity: cartmeal.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      quantity = quantity;

      setCartItems([...cartItems, { ...mealName }]);
    }

    toast.success(`${qty} ${mealName} added to the cart.`);
  };

  return (
    <cartContext.Provider
      value={{
        sahowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

// Context Hook
export const useCartContext = () => useContext(cartContext);

export default CartContext;
