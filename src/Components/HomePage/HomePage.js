import React from 'react'
import './HomePage.css'

const HomePage = ({filepath, getRandomDog}) => {

  const randomPathBreed = filepath.split('/')[4]

  return (
    <div className='random-dog-window'>
      <img className='random-dog-image' src={filepath}/>
      <h3>For more, search for: {randomPathBreed}</h3>
      <button className='random-dog-button' onClick={() => getRandomDog()}>Click Here for a new Pooch!</button>
    </div>
  )
}

export default HomePage;