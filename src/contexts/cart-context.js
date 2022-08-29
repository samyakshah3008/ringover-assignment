import { createContext, useContext, useState } from "react";

const createCart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <createCart.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </createCart.Provider>
  );
};

export const useCart = () => useContext(createCart);
