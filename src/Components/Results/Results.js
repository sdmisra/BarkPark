import React from 'react'
import {Redirect} from 'react-router-dom'
import './Results.css'

const Results = ({error, searchResults}) => {

  if (error) {
    return (
      <Redirect to='/error/'/>
    )
  }

  return (
    <>
    <div>Results</div>
    </>
  )
}

export default Results