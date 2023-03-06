import React, { useContext, useState } from 'react'
import { RestaurantTypes } from '../../models/MenuTypes';
import { Cards } from '../Cards';

import { useCreateContextResto } from '../context/ContextResto';
import { RestaurantsContext } from '../context/RestaurantsContext';
import "./FavorisPage.css"



export const FavorisPage = () => {
  const {favorites} = useCreateContextResto();


  return (
    <div className="favoris">
      <div className='textfav'>
          <h1>Mes Favories</h1>
      </div>
      <div className='cardfav'>
        {favorites.map((favor:RestaurantTypes) =>(
          <Cards restaurants={favor} key={favor.id}/>
        ))}

      </div>
      
    </div>
  )
}