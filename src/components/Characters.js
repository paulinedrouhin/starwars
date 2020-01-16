import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Characters.css'


const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [title, setTitle] = useState('')

  useEffect(() => {
    const axiosData = async url => {
      const res = await axios.get(url);
      setCharacters(res.data.results);
      { console.log('data1', res.data) }
    };
    axiosData("https://swapi.co/api/people/");


  }, []);

  // liste filtrée /// 
  const filteredList = characters.filter(item => item.name.toLowerCase().includes(title.toLowerCase()) )

  return (
    <div>
      <div className="Characters-formContainer">
        <form className="Characters-ApiRequest">
          <input
            id="title"
            name="title"
            className="ApiRequest-input"
            list="character"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            minLength="2"
            placeholder="Character name..."
          />
        </form>
      </div>
      <div className='Characters-container'>
        {title ? filteredList.map((character, index) => {
          const url = `${character.url}`
          return <Link to={`/character/${url}`}>
            <h2 className='Characters-Display'>{character.name}</h2>

          </Link>
        }) :
          characters.map((character, index) => {
            const url = `${character.url}`
            return <Link className="title" to={`/character/${url}`}>
              <h2 className='Characters-Display'> {character.name}</h2>
            </Link>
          })}
      </div>
    </div>

  )
};



export default Characters