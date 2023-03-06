import React, { useState } from "react";
import { RestaurantTypes } from "../models/MenuTypes";
import "./Cards.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useCreateContextResto } from "./context/ContextResto";


type RestaurantProps = {
  restaurants: RestaurantTypes;

};

export const Cards = ({ restaurants }: RestaurantProps) => {
  const [isYellow, setIsYellow] = useState(false);
  const {favorites, addFav} = useCreateContextResto();
 


  const handleClick = () => {
    setIsYellow(!isYellow);
  };

  const Verify =(id: number) =>{
    let verif = favorites.some(
      (restoIdFav) => restoIdFav.id === restaurants.id
    );
    return verif;
  };


 


  return (
    <div className="restaurantCard">
      <img src={restaurants.img} alt="" />

      <div className="flex">
        <div className="text">
          <Link to={`/page/${restaurants.id}`}>
            <h3>{restaurants.name}</h3>
            <p>{restaurants.description_short}</p>
          </Link>
        </div>

        <div className="iconfav" /* onClick={()=>{handleClick()} }*/>
          {/* <FaStar size={32} color={isYellow ? "yellow" : "grey"} /> */}
          {Verify(restaurants.id) ?
          (<AiFillStar size={35}/>):
          (<p onClick={() => addFav(restaurants)}><AiOutlineStar size={35}/></p>)
        }

        </div>
      </div>
    </div>
  );
};

