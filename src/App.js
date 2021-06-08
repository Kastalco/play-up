import React from 'react';
import './App.css';
import PantallaPeliculas from './Components/P-Películas/PantallaPeliculas';
import Pago from './Components/Pago/Pago';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import MoviePlay from './Components/MoviePlay/MoviePlay';
import Main from './ComponentsHome/pages/index';



function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch>

          <Route path="/home" component ={Main}/>

          <Route exact path="/">
            <PantallaPeliculas />
          </Route>

          <Route exact path="/donation">
            <Pago />
          </Route>

          <Route exact path="/movie">
            <MoviePlay />
          </Route>
      
          

        </Switch>
      </Router>

    </div>
  );
}

export default App;
