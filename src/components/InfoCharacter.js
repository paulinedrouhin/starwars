import './CharactersCard.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const InfoCharacters = (params) => {
 console.log(params)
 const [character, setCharacter]= useState({})

 
 useEffect(() => {
     const urlCharacter = params.location.pathname.substring(11 ,params.location.pathname.length)
     console.log('hello', urlCharacter)
     
     const axiosData = async url => {
         const res = await axios.get(url);
         setCharacter(res.data);
         { console.log('data1', res.data) }
        };
        axiosData(`${urlCharacter}`);
        
        
    }, []);
    console.log('character', character)

    return (
        <div className="GameCard">
           <h2>{character.name}'s profile :</h2>
           <p>Eye color : {character.eye_color}</p>
           <p>Birth year : {character.birth_year}</p>
           <p>Gender: {character.gender}</p>
           {character.starships ? 
           character.starships.map((ship,index) => {
               return <Link to={`/spaceship/${ship}`}><p>Starships {index + 1}</p></Link>
            })
            : ''}
            <p>Created: {character.created} </p>
            <p>Edited: {character.edited} </p>

        </div>
      );
    };

export default InfoCharacters