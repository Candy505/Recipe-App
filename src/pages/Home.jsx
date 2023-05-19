import React from 'react';
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from '../components/Category';
function Home()
{
    return(
     
        <div >
            <Popular apiKey="f48dc4370af54c16b6d34015baaee5a2"/>   
            <Veggie apiKey="f48dc4370af54c16b6d34015baaee5a2"/>
       </div>
    )
}

export default Home;