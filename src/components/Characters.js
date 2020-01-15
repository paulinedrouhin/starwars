import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import CharactersCard from './CharactersCard'
import './Characters'


const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [title, setTitle] = useState()

  useEffect(() => {
    const axiosData = async url => {
      const res = await axios.get(url);
      setCharacters(res.data.results);
      { console.log('data1', res.data) }
    };
    axiosData("https://swapi.co/api/people/");


  }, []);

  // liste filtrée
  const filteredList = characters.filter(item => item.name.toLowerCase().includes(title))

  return (
    <div>
          <h1> Star Wars Characters</h1>
      <div>
        <form className="ApiRequest-form">
          <input
            id="title"
            name="title"
            className="ApiRequest-input"
            list="food"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            minLength="2"
            placeholder="Character name..."
          />
        </form>
      </div>
      
      {title ? filteredList.map((character, index) => {
          const url = `${character.url}`
          return <Link className="title" to={`/character/${url}`}>
          <CharactersCard
          key={index}
          id={index}
          name={character.name}
          image={character.url} />
          </Link>
      }) :
        characters.map((character, index) => {
          const url = `${character.url}`
          return <Link className="title" to={`/character/${url}`}>
          <CharactersCard
            key={index}
            id={index}
            name={character.name}
            image={character.url} />
       

      </Link>
       })}


    </div>

  )
};



export default Characters