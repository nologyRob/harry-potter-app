import React from 'react'
import "./CharacterCard.scss"

const CharacterCard = (props) => {

  const {name, house, image} = props;

  return (
    <div className='character-card'>
      <h3>{name}</h3>
      <img className="character-card__image" src={image} alt="" />
      <h4>{house}</h4>
    </div>
  )
}

export default CharacterCard