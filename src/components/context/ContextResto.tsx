import React, { useState,createContext, useContext } from 'react'
import { restaurants } from '../../data';
import { RestaurantTypes } from '../../models/MenuTypes';

type contextProps ={
  children:React.ReactNode
};

type CreateContextResto ={
  favorites: RestaurantTypes[];
  addFav: (restaurant: RestaurantTypes) => void;
  removeFav: (id: number) => void;

}

const CreateContextResto= createContext({} as CreateContextResto);

export const useCreateContextResto =()=>{
  const contextRest = useContext(CreateContextResto)
  return contextRest;
}

export const ContextResto = ({children}:contextProps) => {
    const [favorites, setFavorites] = useState<RestaurantTypes[]>([]);
    console.log(favorites);
    


    const addFav = (restaurant: RestaurantTypes) => {
      let favsInitial=[...favorites];
      let favsSecd= favsInitial.concat(restaurant);
      setFavorites(favsSecd);
    };

    const removeFav = (id: number) =>{
      let removeFavs=[...favorites];
      let removeSecd= removeFavs.filter(
        (restaurants) => restaurants.id !== id )
        setFavorites(removeSecd);
    };


    

  return (
    <CreateContextResto.Provider
    value={{
      addFav,
      removeFav,
      favorites,
    }}>
      {children}
    </CreateContextResto.Provider>
  )
}
