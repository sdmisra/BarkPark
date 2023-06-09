import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import DogCard from '../DogCard/DogCard'
import './Results.css'

const Results = ({searchResults}) => {

  const resultsMap = searchResults.map((result, i )=> {
    console.log(result)
    return (
      <DogCard path={result[i]} key={i}/>
    )
  })

  if (searchResults.length === 0) {
    return (
      <Redirect to="/"/>
    )
  }

  console.log(resultsMap)
  return (
    <div className="dog-card-container">
    {resultsMap}
    </div>
  )
}

export default Results