import React from 'react';
import './PokeCards.css'
const Cards = ({ id, name, type, experience }) => {
    return (
        <div id={id} className={`CardContainer ${type}`} >
            <h4>{name}</h4>
            <img class="CardImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <h5>{type}</h5>
            <p>EXP:{experience}</p>
        </div >
    )

}

export default Cards