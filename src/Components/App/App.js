import {Switch, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import HomePage from '../HomePage/HomePage';
import Header from  '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm';
import Results from '../Results/Results';
import SavedPooches from '../SavedPooches/SavedPooches';

import './App.css';

const App = () => {
  const [displayedDog, setDisplayedDog] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [savedDogs, setSavedDogs] = useState([])

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
    if (breed === '') {
      return
    }
    let url = `https://dog.ceo/api/breed/${breed}/images/random/12`
    if (breed.includes('-')) {
      const splitName = breed.split('-')
      url = `https://dog.ceo/api/breed/${splitName[0]}/${splitName[1]}/images/random/12`
    }
    try {
      const response = await fetch(url);
      if (response.status === 'error') {
        throw new Error(`Error in Specific Call! status: ${response.status}`)
      }
      const dozenDoggos = await response.json()
      setSearchResults(dozenDoggos.message)
      return dozenDoggos;
    } catch(error) {
      return error
    }
  }

  const saveDogPhoto = (dogObject) => {
    const allButClicked = searchResults.filter(path=> path !== dogObject.path)
    setSearchResults(allButClicked)
    setSavedDogs([...savedDogs, dogObject])
  }

  const unSaveDogPhoto = (dogObject) => {
    const allButClicked = savedDogs.filter(object => object !== dogObject)
    setSavedDogs(allButClicked)
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
      <Route exact path='/saved'>
        <SavedPooches 
        savedDogs={savedDogs} 
        unSaveDogPhoto={unSaveDogPhoto}/>
      </Route>
      <Route path='/:breedname' render={
        ({match})=> {
          const breed = match.params.breedname
          if (searchResults.length === 0) {
            getSpecificBreed(breed)
          }
           return <Results 
           getSpecificBreed={getSpecificBreed}
           searchResults={searchResults} 
           breed={breed} 
           saveDogPhoto={saveDogPhoto}/>
        }
      }>
      </Route>
    </Switch>
    <Footer saved={savedDogs}/>
    </div>
  );
}

export default App;