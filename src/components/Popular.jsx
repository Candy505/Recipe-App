import { useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import { Link } from "react-router-dom";

function Popular(props) {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  //using async so we are sure to have data first
  const getPopular = async () => {

    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check)); // converting back to an array
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${props.apiKey}&number=10`)
      const data = await api.json();  //will basically give us data in json format

      localStorage.setItem("popular", JSON.stringify(data.recipes));  //only strings can be saved in local storage
      setPopular(data.recipes);
      //console.log(data);  gotta save this data, this is where states come in picture

    }

  }

  return (
    <div>


      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            arrows: false,
            gap: "5rem",
          }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key = {recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
  
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
                </Card>
                <p>{recipe.title}</p>
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

 p{
  
  text-align:center;
 }
 
 h3{
  text-align:center;
 }
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow:hidden;
  position:relative;
   

  img{
   border-radius: 2rem;
  position : absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}


`;
export default Popular;
