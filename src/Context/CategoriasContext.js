import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";

const ContextCategoria = React.createContext();

export function InitPageProvider({ children }) {
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/categorias");
      setCategorias(data);
    })();
  }, []);
  const value = useMemo(() => {
    return {
      Categorias,
    };
  }, [Categorias]);
  return (
    <ContextCategoria.Provider value={value}>
      {children}
    </ContextCategoria.Provider>
  );
}
export const useInitiPage = () => {
  const context = React.useContext(ContextCategoria);
  if (!context) {
    throw new Error("Tiene que estar dentro del contexto InitPage");
  }
  return context;
};
