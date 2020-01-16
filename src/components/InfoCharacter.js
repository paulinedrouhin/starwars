import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './InfoCharacter.css'

const InfoCharacters = (params) => {
	console.log(params)
	const [character, setCharacter] = useState({})
	const [ship, setShip] = useState([])
	const [shipName, setShipName] = useState([])

	useEffect(() => {
		const urlCharacter = params.location.pathname.substring(11, params.location.pathname.length)
		const axiosData = async url => {
			const res = await axios.get(url)
			await setCharacter(res.data);
			await setShip(res.data.starships)
		};
		axiosData(`${urlCharacter}`);
	}, [])

	const getShipName = () => {
		return ship.map((ship) => {
			return axios.get(ship)
				.then(res => {
					const name = res.data.name
					setShipName((prevState) => {
						return [...prevState, name]	}
						)
				}
				)
		})

	}
	useEffect(() => {
		getShipName()
	}, [ship])

	console.log('salut', shipName)



	// console.log('character', character)
	// console.log('shiiiiiiiiip', ship)
	// console.log('shipName', shipName)



	return (
		<div className="GameCard">
			<h2>{character.name}</h2>
			<p>Eye color : {character.eye_color}</p>
			<p>Birth year : {character.birth_year}</p>
			<p>Gender : {character.gender}</p>
			{character.starships ? <p>Starships :</p> : ''}
			{character.starships ?
				character.starships.map((ship, index) => {
				return <Link to={`/spaceship/${ship}`}><p className='link'>- {shipName[index]}</p></Link>
				})
				: ''}
			<p>Created: {character.created} </p>
			<p>Edited: {character.edited} </p>
			<p></p>

		</div>
	);
};

export default InfoCharacters