import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantTypes } from "../../models/MenuTypes";
import { useCreateContextResto } from "../context/ContextResto";
import { RestaurantsContext } from "../context/RestaurantsContext";
import "./RestaurantsPage.css";


type RestaurantProps = {
  restaurants: RestaurantTypes;

};



const RestaurantsPage = () => {

  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  console.log(restaurants);
  console.log(typeof id);
  const restaurant = restaurants.filter(
    (restaurant) => restaurant.id === Number(id)
  );
  console.log(restaurant);
  const {favorites, addFav} = useCreateContextResto();

  
  




  return (
    <div className="restaurantpage">
      {restaurant.map((resto) => (
        <div>
          {/* <img src={resto.img} alt="" /> */} {/* PROBLEME AVEC IMAGE */}
          <h1>{resto.name}</h1>
          <h3>{resto.description_long}</h3>

          <div className="btn"><button className="btnfav" > Ajouter aux Favoris</button></div>
          
          <h1>Menu</h1>

          <h2 className="hh">Entrées</h2>
          <h3>{resto.menu.entrees[0]}</h3>
          <h3>{resto.menu.entrees[1]}</h3>

          <h2>Plats</h2>
          <h3>{resto.menu.dishes[0]}</h3>
          <h3>{resto.menu.dishes[1]}</h3>
          <h3>{resto.menu.dishes[2]}</h3>

          <h2>Desserts</h2>
          <h3>{resto.menu.deserts[0]}</h3>
          <h3>{resto.menu.deserts[1]}</h3>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPage;

