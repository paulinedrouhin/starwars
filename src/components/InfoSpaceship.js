import './CharactersCard.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const InfoSpaceship = (params) => {
 console.log(params)
 const [ship, setShip]= useState({})

 
 useEffect(() => {
     const urlShip = params.location.pathname.substring(11,params.location.pathname.length)
     console.log('hello', urlShip)
     
     const axiosData = async url => {
         const res = await axios.get(url);
         setShip(res.data);
         { console.log('data1', res.data) }
        };
        axiosData(`${urlShip}`);
        
        
    }, []);
    console.log('ship', ship)

    return (
          <div className="GameCard">
           <h2>{ship.name}'s profile :</h2>
           <p>Model : {ship.model}</p>
           <p>Manufacturer : {ship.manufacturer}</p>
           {/* <p>Pilots: {ship.gender}</p>
           {ship.starships ? 
           ship.starships.map((ship,index) => {
               
               return <Link className="title" to={`/character/${url}`}>
                   <p></p>
               </Link>
            })
            : ''} */}

        </div>
      );
    };

export default InfoSpaceship