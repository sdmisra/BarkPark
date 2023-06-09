import React from 'react'
import DogCard from '../DogCard/DogCard'
import './SavedPooches.css'

const SavedPooches = ({savedDogs, unSaveDogPhoto}) => {
  let savedCards;
  if (savedDogs.length > 0) {
    savedCards = savedDogs?.map(uniqueDogObject=> {
      console.log(uniqueDogObject)
      return (
        <DogCard id={uniqueDogObject} path={uniqueDogObject.path} key={uniqueDogObject.num} breed={uniqueDogObject.breedType} unSaveDogPhoto={unSaveDogPhoto} saved={true}/>
      )
    })
  }


  if (savedDogs.length === 0) {
    return (
      <h2>No dog pictures are currently saved! Please hit the Welcome Banner to start searching and saving.</h2>
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