import Home from "./Home"
import React from "react";
import { Route, Routes} from 'react-router-dom'
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine apiKey="f48dc4370af54c16b6d34015baaee5a2"/>}/>
        <Route path = "/searched/:search" element={<Searched apiKey="f48dc4370af54c16b6d34015baaee5a2"/>}/>
        <Route path = "/recipe/:name" element={<Recipe apiKey="f48dc4370af54c16b6d34015baaee5a2"/>}/>
      </Routes>
   
  );
}

export default Pages;