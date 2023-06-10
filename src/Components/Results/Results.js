import React from 'react'
import PropTypes from 'prop-types'
import DogCard from '../DogCard/DogCard'
import './Results.css'

const Results = ({searchResults, getSpecificBreed, breed, saveDogPhoto}) => {
  let resultsMap;
  if (searchResults.length > 0) {
    resultsMap = searchResults?.map((url, i)=> {
      const uniqueDogObject = {num: i, breedType: breed, path: url}
      return (
        <DogCard path={url} key={i} saveDogPhoto={saveDogPhoto} id={uniqueDogObject} breed={breed}/>
      )
    })
  }

  if (searchResults.length === 0) {
    return (
      <h2 className="error-message">No Results! Please Click the Header to try again!</h2>
    )
  }
  return (
    <>
      <span><button 
      className="more-results" 
      onClick={()=> {
        getSpecificBreed(breed)
      }}>
        Click for more ({breed}s):</button>
      </span>
    <div className="dog-card-container">
    {resultsMap}
    </div>
    </>
  )
}

export default Results

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
  getSpecificBreed: PropTypes.func.isRequired,
  breed: PropTypes.string.isRequired,
  saveDogPhoto: PropTypes.func.isRequired
}