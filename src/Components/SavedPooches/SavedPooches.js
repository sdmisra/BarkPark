import React from 'react'
import PropTypes from 'prop-types'
import DogCard from '../DogCard/DogCard'
import './SavedPooches.css'

const SavedPooches = ({savedDogs, unSaveDogPhoto}) => {
  let savedCards;
  if (savedDogs.length > 0) {
    savedCards = savedDogs?.map(uniqueDogObject=> {
      console.log(uniqueDogObject)
      return (
        <DogCard id={uniqueDogObject} path={uniqueDogObject.path} key={uniqueDogObject.num+1} breed={uniqueDogObject.breedType} unSaveDogPhoto={unSaveDogPhoto} saved={true}/>
      )
    })
  }


  if (savedDogs.length === 0) {
    return (
      <h2 className="error-message">No dog pictures are currently saved! Please hit the Welcome Banner to start searching and saving.</h2>
    )
  }

  console.log(savedCards)
  return (
    <div className='saved-container'>
      {savedCards}
    </div>
  )
}


export default SavedPooches;

SavedPooches.propTypes = {
  savedDogs: PropTypes.array.isRequired,
  unSaveDogPhoto: PropTypes.func.isRequired
}