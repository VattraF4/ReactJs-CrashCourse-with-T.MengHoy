import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function Context({ children }) {
    
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <GlobalContext.Provider value={{ user, setUser: () => setUser(null) }}>
      {children}
    </GlobalContext.Provider>
  );
}
 
export default Context;
