import React, { useState } from "react";
import { RestaurantTypes } from "../models/MenuTypes";
import "./Cards.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useCreateContextResto } from "./context/ContextResto";


type RestaurantProps = {
  restaurant: RestaurantTypes;

};

export const Cards = ({ restaurant }: RestaurantProps) => {
  const [isYellow, setIsYellow] = useState(false);
  const {favorites, addFav, removeFav} = useCreateContextResto();
 


  const handleClick = () => {
    setIsYellow(!isYellow);
  };

  const Verify =(id: number) =>{
    let verif = favorites.some(
      (restoIdFav) => restoIdFav.id === restaurant.id
    );
    return verif;
  };


 


  return (
    <div className="restaurantCard">
      <img src={restaurant.img} alt="" />

      <div className="flex">
        <div className="text">
          <Link to={`/page/${restaurant.id}`}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description_short}</p>
          </Link>
        </div>

        <div className="iconfav" /* onClick={()=>{handleClick()} }*/>
          {/* <FaStar size={32} color={isYellow ? "yellow" : "grey"} /> */}
          {Verify(restaurant.id) ?
          (<AiFillStar size={35} onClick={()=> removeFav(restaurant.id)}/>):
          (<p onClick={() => addFav(restaurant)}><AiOutlineStar size={35}/></p>)
        }

        </div>
      </div>
    </div>
  );
};

