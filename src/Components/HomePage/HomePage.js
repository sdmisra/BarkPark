import React from 'react'
import './HomePage.css'

const HomePage = ({filepath, getRandomDog}) => {
  let rename;
  const randomPathBreed = filepath.split('/')[4]
  if (randomPathBreed?.includes('-')) {
    rename = randomPathBreed.split('-').reverse().join(' ')
  }
  return (
    <div className='random-dog-window'>
      <img className='random-dog-image' src={filepath}/>
      <h3 className="dog-breed-tag">Want more? Search for: '{randomPathBreed}'</h3>
      <button className='random-dog-button' onClick={() => getRandomDog()}>Click Here for a new Pooch!</button>
    </div>
  )
}

export default HomePage;