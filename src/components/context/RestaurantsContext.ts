import { createContext } from "react";
import { RestaurantTypes } from "../../models/MenuTypes";

// Context typé,
type RestaurantsContextValue = {
  restaurants: RestaurantTypes[];
};

export const RestaurantsContext = createContext<RestaurantsContextValue>({
  restaurants: [],
});
