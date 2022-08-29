import { createContext, useContext, useReducer } from "react";
import { reducerCallback } from "../reducers/filter-reducer";

const initialState = {
  priceRange: {
    isBetween1500to4000: false,
    isBetween4001to7000: false,
    isAbove7001: false,
  },
  categories: {
    loafers: false,
    sneakers: false,
  },
};

const createFilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCallback, initialState);

  return (
    <createFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </createFilterContext.Provider>
  );
};

const useFilter = () => useContext(createFilterContext);

export { FilterProvider, useFilter };
