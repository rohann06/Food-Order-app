import React, { createContext, useContext, useState } from "react";

// Creating Context
const cartContext = createContext();

function CartContext({ children }) {
  const [sahowCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  // Inc or Dec the quantity
  const incQty = () => {
    setQty((prevQty) => prevQty +1,)
  }
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

// Context Hook
export const useCartContext = () => useContext(cartContext);

export default CartContext;
