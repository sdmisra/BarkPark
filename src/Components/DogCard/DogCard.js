import React from 'react'
import './DogCard.css'

const DogCard = ({path, saveDogPhoto, unSaveDogPhoto, id, saved = false}) => {
  
  if (saved) {
    return (
    <div className="dog-card" >
      <img className="card-photo" src={path}/>
      <button 
      className='delete-button'
      onClick={()=> {unSaveDogPhoto(id)}}>Remove Picture!</button>
    </div>
)} else {
    return (
      <div className="dog-card" >
        <img className="card-photo" src={path}/>
        <button 
        className='save-button'
        onClick={()=> {saveDogPhoto(id)}}>Save Picture!</button>
      </div>
  )
}

}


export default DogCard