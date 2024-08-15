import { createContext, useState, useContext } from 'react';

const PlotContext = createContext();

export const PlotProvider = ({ children }) => {
  const [workPermit, setWorkPermit] = useState(null); 

  return (
    <PlotContext.Provider value={{ workPermit, setWorkPermit }}>
      {children}
    </PlotContext.Provider>
  );
};

export const usePlotContext = () => useContext(PlotContext);
