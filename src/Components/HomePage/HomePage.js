import React from 'react'
import PropTypes from 'prop-types'
import './HomePage.css'

const HomePage = ({filepath, getRandomDog}) => {
  const randomPathBreed = filepath.split('/')[4]
  let rename;
  randomPathBreed?.includes('-') ? 
  rename = randomPathBreed.split('-').reverse().join(' ') : rename = randomPathBreed;
  return (
    <div className='random-dog-window'>
      <img className='random-dog-image' src={filepath} alt={rename}/>
      <h3 className="dog-breed-tag">Search for: '{rename}'</h3>
      <button className='random-dog-button' onClick={() => getRandomDog()}>Click Here for a new Pooch!</button>
    </div>
  )
}

export default HomePage;

HomePage.propTypes = {
  filepath: PropTypes.string.isRequired,
  getRandomDog: PropTypes.func.isRequired
}