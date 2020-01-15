import React from 'react';
import './CharactersCard.css'

const CharactersCard = (props) => {

    return (
        <div className="GameCard">
           <h2>{props.name}</h2>
        </div>
      );
    };

export default CharactersCard