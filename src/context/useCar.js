import { useContext, useState, createContext } from "react";

import CarData from "../carInfo.json";

const CarsContext = createContext(null);

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState(CarData);

  return (
    <CarsContext.Provider value={{ cars }}>
      {children}
    </CarsContext.Provider>
  )
}

export const useCarContext = () => useContext(CarsContext);

export default CarsProvider
