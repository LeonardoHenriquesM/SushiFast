import { createContext, useState } from "react";

export const PanierContext = createContext();

export function PanierProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  return (
    <PanierContext.Provider value={{ cart, setCart }}>
      {children}
    </PanierContext.Provider>
  );
}
