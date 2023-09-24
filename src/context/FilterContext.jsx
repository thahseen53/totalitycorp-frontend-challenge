import { createContext, useContext, useReducer } from "react";
import products from "../productsData";
import { filterReducer } from "./FilterReducer";

const initialState = {
  products: products,
  sortBy: null,
  rating: null,
  category: null,
};

const FilterContext = createContext(initialState);
export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const ratings = (products) => {
    if (state.rating === "4stars") {
      return products.filter((product) => product.ratings >= 4);
    }
    if (state.rating === "3stars") {
      return products.filter((product) => product.ratings >= 3);
    }
    if (state.rating === "2stars") {
      return products.filter((product) => product.ratings >= 2);
    }
    if (state.rating === "1stars") {
      return products.filter((product) => product.ratings >= 1);
    }
    return products;
  };
  const sorting = (products) => {
    if (state.sortBy === "lowToHigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "highToLow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  };
  const categories = (products) => {
    if (state.category === "electronics") {
      return products.filter((product) => product.category === "Electronics");
    }
    if (state.category === "footwear") {
      return products.filter((product) => product.category === "Footwear");
    }
    if (state.category === "kitchenAppliances") {
      return products.filter(
        (product) => product.category === "Kitchen Appliances"
      );
    }
    if (state.category === "wearables") {
      return products.filter((product) => product.category === "Wearables");
    }
    if (state.category === "toysAndGames") {
      return products.filter((product) => product.category === "Toys & Games");
    }
    if (state.category === "clothing") {
      return products.filter((product) => product.category === "Clothing");
    }
    return products;
  };

  const filteredProducts = categories(sorting(ratings(state.products)));
  const value = {
    state,
    dispatch,
    products: filteredProducts,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
