import { createContext, useState, useContext } from 'react';

// Crear el contexto
const AppContext = createContext();

// Crear un proveedor del contexto
export const AppProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null); // Estado global

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useAppContext = () => useContext(AppContext);
