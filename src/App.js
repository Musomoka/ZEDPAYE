import React from 'react';
import About from './components/About.js';
import Contact from './components/Contact';
import Home from './components/Home';
import PAYE from './components/PAYE'
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    
    <Router>
    <Switch>
      <>
        <Navigation />
        <Route path="/contact"> <Contact /> </Route>
        <Route path="/about"> <About /> </Route>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/PAYE"><PAYE /></Route>
      </>
    </Switch>
  </Router>
  )
}

export default App
