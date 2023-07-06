import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'


import Display from './components/Display';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
    <h1>hello</h1>
    <Switch>
    
    {/* CREATE AUTHOR */}
    <Route path='/author/create'>
    <Create/>
    </Route>

    <Route path='/author/update/:someId'>
      <Update/>
    </Route>
  
    {/* DISPLAY/HOME */}
    <Route path='/'>
    <Display/>
    </Route>

    </Switch>
    </div>
  );
}

export default App;
