import React from 'react';
import './App.css';
import PantallaPeliculas from './Components/P-Películas/PantallaPeliculas';
import Pago from './Components/Pago/Pago';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch>
          <Route exact path="/">
            <PantallaPeliculas />
          </Route>

          <Route exact path="/donation">
            <Pago />
          </Route>
      

        </Switch>
      </Router>

    </div>
  );
}

export default App;
