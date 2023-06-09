import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import DogCard from '../DogCard/DogCard'
import './Results.css'

const Results = ({searchResults, getSpecificBreed, breed}) => {

  const resultsMap = searchResults.map((result, i )=> {
    console.log(result)
    return (
      <DogCard path={result} key={i}/>
    )
  })

  if (searchResults.length === 0) {
    return (
      <h2>No Results! Please Click the Header to try again!</h2>
    )
  }

  console.log(resultsMap)
  return (
    <>
      <span><button 
      className="more-results" 
      onClick={()=> {
        getSpecificBreed(breed)
      }}>
        Click for more {breed}s:</button>
      </span>
    <div className="dog-card-container">
    {resultsMap}
    </div>
    </>
  )
}

export default Results