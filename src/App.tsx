import React from "react";
import "./App.css";
import { restaurants } from "./data";
import { RestaurantsContext } from "./components/context/RestaurantsContext";
import Navbar from "./components/Navbar";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantsPage from "./components/Pages/RestaurantsPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FavorisPage } from "./components/Pages/FavorisPage";
import { ContextResto } from "./components/context/ContextResto";


function App() {
  return (
    <RestaurantsContext.Provider value={{ restaurants }}>
      <ContextResto>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<RestaurantsList />} />
          <Route path="/page/:id" element={<RestaurantsPage />} />
          <Route path="/favoris" element={<FavorisPage />} />
        </Routes>
      </Router>
      </ContextResto>
    </RestaurantsContext.Provider>
  );
}

export default App;
