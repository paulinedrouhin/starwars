import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const InfoSpaceship = (params) => {
 console.log(params)
 const [ship, setShip]= useState({})
 const [character, setCharacter] = useState([])
 const [characterName, setCharacterName] = useState([])
 
 useEffect(() => {
     const urlShip = params.location.pathname.substring(11,params.location.pathname.length)
     console.log('hello', urlShip)
     
     const axiosData = async url => {
         const res = await axios.get(url);
         setShip(res.data);
         setCharacter(res.data.pilots)
        };
        axiosData(`${urlShip}`);
        
        
    }, []);

    const getCharacterName = () => {
		return character.map((character) => {
			return axios.get(character)
				.then(res => {
					const name = res.data.name
					setCharacterName((prevState) => {
						return [...prevState, name]	}
						)
				}
				)
		})

	}
	useEffect(() => {
		getCharacterName()
	}, [character])
    console.log('ship', ship)
    console.log('character', characterName)

    return (

        <div className="GameCard">
           <h2>{ship.name} StarShip</h2>
           <p>Model : {ship.model}</p>
           <p>Manufacturer : {ship.manufacturer}</p>
           {ship.pilots ? <p> Pilots :</p> : ''}
           {ship.pilots ? 
           ship.pilots.map((pilot,index) => {
               return <Link className="title" to={`/character/${pilot}`}>
                   <p className='link'>- {characterName[index]}</p>
               </Link>
            })
            : ''}

        </div>
      );
    };

export default InfoSpaceship