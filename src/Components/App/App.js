import {Switch, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import HomePage from '../HomePage/HomePage';
import SearchForm from '../SearchForm/SearchForm';

import './App.css';

const App = () => {
  const [displayedDog, setDisplayedDog] = useState('')

  const getRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error(`Error in Random Call! code: ${response.status}`)
      }
      const randomDog = await response.json()
      setDisplayedDog(randomDog.message)
      return randomDog;
    } catch(error) {
      return error
    }
  }

  const getSpecificBreed = async (breed) => {
    console.log(breed)
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      if (!response.ok) {
        throw new Error(`Error in Random Call! code: ${response.status}`)
      }
      const oneOfABreed = await response.json()
      console.log(oneOfABreed.message)
      setDisplayedDog(oneOfABreed.message)
      return oneOfABreed;
    } catch(error) {
      return error
    }
  }

  useEffect(()=> {
    if (displayedDog === '') {
      getRandomDog()
    }
  },[displayedDog])


  return (
    <Switch>
      <Route path='/'>
        <HomePage filepath={displayedDog} getRandomDog={getRandomDog}/>
        <SearchForm getSpecificBreed={getSpecificBreed}/>
      </Route>
      <Route path='/saved'>
      </Route>
    </Switch>
  );
}

export default App;