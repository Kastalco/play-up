import React from 'react';
import './App.css';
import PantallaPeliculas from './Components/P-Películas/PantallaPeliculas';
import Pago from './Components/Pago/Pago';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <PantallaPeliculas />
      
    </div>
  );
}

export default App;
