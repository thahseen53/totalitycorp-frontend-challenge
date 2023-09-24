import { useFilter } from "../../../context/FilterContext";

const Filter = () => {
  const { dispatch, state } = useFilter();
  return (
    <div className="bg-[#f2f2f2] m-0 p-5 absolute h-[100vh] md:w-[25%] rounded-lg">
      <div>
        <p className="font-bold">Sort by </p>
        <div className="flex items-center my-1">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { sortBy: "lowToHigh" } })
            }
            checked={state.sortBy === "lowToHigh" || false}
            name="Price_Sort"
            id="sort1"
          />

          <label htmlFor="sort1">Price - Low to High</label>
        </div>
        <div className="flex items-center my-1">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { sortBy: "highToLow" } })
            }
            checked={state.sortBy === "highToLow" || false}
            name="Price_Sort"
            id="sort2"
          />
          <label htmlFor="sort2">Price - High to Low</label>
        </div>
      </div>
      <div>
        <p className="font-bold">Ratings</p>
        <div className="flex items-center my-1">
          <input
            id="rating-sort-1"
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { rating: "4stars" } })
            }
            checked={state.rating === "4stars" || false}
            type="radio"
            value=""
            name="rating-sort"
          />
          <label htmlFor="rating-sort-1">4 Stars & Above</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="rating-sort-2"
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { rating: "3stars" } })
            }
            checked={state.rating === "3stars" || false}
            type="radio"
            value=""
            name="rating-sort"
          />
          <label htmlFor="rating-sort-2">3 Stars & Above</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="rating-sort-3"
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { rating: "2stars" } })
            }
            checked={state.rating === "2stars" || false}
            type="radio"
            value=""
            name="rating-sort"
          />
          <label htmlFor="rating-sort-3">2 Stars & Above</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="rating-sort-4"
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { rating: "1stars" } })
            }
            checked={state.rating === "1stars" || false}
            type="radio"
            value=""
            name="rating-sort"
          />
          <label htmlFor="rating-sort-4">1 Stars & Above</label>
        </div>
      </div>
      <div>
        <p className="font-bold">Categories</p>
        <div className="flex items-center my-1">
          <input
            id="category-sort-electronics"
            type="radio"
            value="Electronics"
            name="category-sort"
            onChange={() =>
              dispatch({
                type: "CATEGORY",
                payload: { category: "electronics" },
              })
            }
            checked={state.category === "electronics" || false}
          />
          <label htmlFor="category-sort-electronics">Electronics</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="category-sort-footwear"
            type="radio"
            value="Footwear"
            name="category-sort"
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: { category: "footwear" } })
            }
            checked={state.category === "footwear" || false}
          />
          <label htmlFor="category-sort-footwear">Footwear</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="category-sort-kitchen"
            type="radio"
            value="Kitchen Appliances"
            name="category-sort"
            onChange={() =>
              dispatch({
                type: "CATEGORY",
                payload: { category: "kitchenAppliances" },
              })
            }
            checked={state.category === "kitchenAppliances" || false}
          />
          <label htmlFor="category-sort-kitchen">Kitchen Appliances</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="category-sort-wearables"
            type="radio"
            value="Wearables"
            name="category-sort"
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: { category: "wearables" } })
            }
            checked={state.category === "wearables" || false}
          />
          <label htmlFor="category-sort-wearables">Wearables</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="category-sort-toys"
            type="radio"
            value="Toys & Games"
            name="category-sort"
            onChange={() =>
              dispatch({
                type: "CATEGORY",
                payload: { category: "toysAndGames" },
              })
            }
            checked={state.category === "toysAndGames" || false}
          />
          <label htmlFor="category-sort-toys">Toys & Games</label>
        </div>
        <div className="flex items-center my-1">
          <input
            id="category-sort-clothing"
            type="radio"
            value="Clothing"
            name="category-sort"
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: { category: "clothing" } })
            }
            checked={state.category === "clothing" || false}
          />
          <label htmlFor="category-sort-clothing">Clothing</label>
        </div>
      </div>
      {console.log(state.category)}
    </div>
  );
};

export default Filter;
