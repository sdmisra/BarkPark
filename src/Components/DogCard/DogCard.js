import React from 'react'
import PropTypes from 'prop-types'
import './DogCard.css'

const DogCard = ({path, saveDogPhoto, unSaveDogPhoto, id, saved = false}) => {
  const altText = path.split('/')[4]
  let rename;
  altText?.includes('-') ? 
  rename = altText.split('-').reverse().join(' ') : rename = altText;

  if (saved) {
    return (
    <div className="dog-card" >
      <img className="card-photo" src={path} alt={rename}/>
      <button 
      className='delete-button'
      onClick={()=> {unSaveDogPhoto(id)}}>Remove Picture!</button>
    </div>
)} else {
    return (
      <div className="dog-card" >
        <img className="card-photo" src={path} alt={rename}/>
        <button 
        className='save-button'
        onClick={()=> {saveDogPhoto(id)}}>Save Picture!</button>
      </div>
  )
}

}


export default DogCard

DogCard.propTypes = {
  path: PropTypes.string.isRequired,
  saveDogPhoto: PropTypes.func.isRequired,
  unSaveDogPhoto: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  saved: PropTypes.bool.isRequired
}