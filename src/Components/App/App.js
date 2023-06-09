import {Switch, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import HomePage from '../HomePage/HomePage';
import Header from  '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm';
import Results from '../Results/Results';

import './App.css';

const App = () => {
  const [displayedDog, setDisplayedDog] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (response.status === 'error') {
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
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);
      if (response.status === 'error') {
        throw new Error(`Error in Specific Call! status: ${response.status}`)
      }
      const dozenDoggos = await response.json()
      console.log(dozenDoggos.message)
      setSearchResults(dozenDoggos.message)
      return dozenDoggos;
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
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/'>
        <HomePage filepath={displayedDog} getRandomDog={getRandomDog}/>
        <SearchForm 
        filepath={displayedDog} 
        getSpecificBreed={getSpecificBreed} />
      </Route>
      <Route path='/results/:breedprompt'>
        <Results searchResults={searchResults}/>
      </Route>
      <Route path='/saved'>
      </Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;