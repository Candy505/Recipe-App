import { useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import { Link } from "react-router-dom";
import '/src/App.css';


function Veggie(props) {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, [])

  //using async so we are sure to have data first
  const getVeggie = async () => {

    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check)); // converting back to an array
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${props.apiKey}&number=9&tags=vegetarian`)
      const data = await api.json();  //will basically give us data in json format

      localStorage.setItem("veggie", JSON.stringify(data.recipes));  //only strings can be saved in local storage
      setVeggie(data.recipes);
      //console.log(data);  gotta save this data, this is where states come in picture

    }

  }

  return (
    <div>


      <Wrapper>
        <h3>Veggie Picks</h3>
        <Splide
          options={{
            perPage: 5,
            pagination: false,
            drag: "free",
            arrows: false,
            gap: "5rem",
          }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} /> 
                    
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>


    </div>
  );
}

const Wrapper = styled.div`
 margin:4rem 0rem;

 h3{
  text-align:center;
 }`

const Card = styled.div`
min-height: 15rem;
  border-radius: 2rem;
  overflow:hidden;
  position:relative;
   

  img{
   border-radius: 2rem;
  position : absolute;
  left:0;
  width:20vw;
  height:100%;
  object-fit:cover;
}

`;



export default Veggie;

