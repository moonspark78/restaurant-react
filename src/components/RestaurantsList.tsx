import React, { useContext } from "react";

import "./RestaurantsList.css";
import { RestaurantsContext } from "./context/RestaurantsContext";
import { RestaurantTypes } from "../models/MenuTypes";
import { Cards } from "./Cards";


const RestaurantsList = () => {
  const { restaurants } = useContext(RestaurantsContext);
  console.log(restaurants);

  return (
    <div className="listcontainer">
      {/* <ul>
          {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul> */}

      {restaurants.map((restaurant: RestaurantTypes, index) => {
        return <Cards key={index} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantsList;
