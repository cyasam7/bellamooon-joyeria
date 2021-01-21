import Axios from "axios";
import React, { useMemo, useState, useContext, createContext } from "react";

const ContextCart = createContext();

export function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);

  function addToCart(producto) {
    const newListCart = [...Cart, producto];
    setCart(newListCart);
  }
  function deleteToCart(index) {
    const newListCart = Cart.filter((_, indexProd) => indexProd !== index);
    setCart(newListCart);
  }
  function deleteAllItemsFromCart() {
    setCart([]);
  }
  async function submiteCart() {
    const data = {
      productos: Cart,
    };
    await Axios.post("/pedidos", data);
    setCart([]);
  }

  const value = useMemo(() => {
    return {
      Cart,
      addToCart,
      deleteToCart,
      deleteAllItemsFromCart,
      submiteCart,
    };
  }, [Cart]);
  return <ContextCart.Provider value={value}>{children}</ContextCart.Provider>;
}

export const useCart = () => {
  const context = useContext(ContextCart);
  if (!context) {
    throw new Error("Tiene que estar dentro del contexto cart");
  }
  return context;
};
