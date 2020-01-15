import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Characters from './components/Characters'
import InfoCharacter from './components/InfoCharacter'
import InfoSpaceship from './components/InfoSpaceship'


function App() {
  return (
    <div className="App">
            <Link  to='/'>   
            <div className='home'> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" className='App-logo' />
            </div> 
            </Link>

     <Switch>
      <Route exact path="/" component={Characters} />
      <Route path="/character/:character" component={InfoCharacter} />
      <Route path="/spaceship/:spaceship" component={InfoSpaceship} />

    </Switch>
    </div>
  );
}

export default App;
