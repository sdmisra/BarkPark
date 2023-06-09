import React from 'react'
import './DogCard.css'

const DogCard = ({path}) => {
  return (
      <img className="card-photo" src={path} />
  )
}


export default DogCard