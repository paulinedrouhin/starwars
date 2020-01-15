import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Characters from './components/Characters'
import InfoCharacter from './components/InfoCharacter'
import InfoSpaceship from './components/InfoSpaceship'


function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/" component={Characters} />
      <Route path="/character/:character" component={InfoCharacter} />
      <Route path="/spaceship/:spaceship" component={InfoSpaceship} />

    </Switch>
    </div>
  );
}

export default App;
