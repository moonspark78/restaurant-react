import React, { useState,createContext, useContext } from 'react'
import { RestaurantTypes } from '../../models/MenuTypes';

type contextProps ={
  children:React.ReactNode
};

type CreateContextResto ={
  favorites: RestaurantTypes[];
  addFav: (restaurant: RestaurantTypes) => void;
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

    

  return (
    <CreateContextResto.Provider
    value={{
      addFav,
      favorites,
    }}>
      {children}
    </CreateContextResto.Provider>
  )
}
