import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe(props)
{
      let params = useParams();
      const [details,setDetails] = useState({});
      const fetchDetails = async() => {

      const api= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${props.apiKey}`)
      const data = await api.json(); 

      setDetails(data);
      };

      useEffect(()=>{
         fetchDetails();

      },[params.name]);
 
      //const YourComponent = ({ details }) => {
         
          
      
    return(
    <div>
       <h1>{details.title}</h1>
       <img src={details.image}></img>
       <h3>Ingredients List</h3>

 
  
       <div>
         <p dangerouslySetInnerHTML={{ __html: details.summary}}></p>
         <p dangerouslySetInnerHTML={{ __html: details.instructions}}></p>
      
      
         
       </div>
       
      
    </div>
   )
    }             


export default Recipe;