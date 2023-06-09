import {Switch, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import HomePage from '../Body/HomePage';

import './App.css';

const App = () => {

  return (
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>
      <Route path='/saved'>
      </Route>
    </Switch>
  );
}

export default App;