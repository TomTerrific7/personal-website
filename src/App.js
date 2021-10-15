
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
      <Router>
         <Navbar/>
        <Switch>
          <Route path='/about' component ={About} />
          <Route path='/contact' component ={Contact} />
          <Route path='/' component ={Home} />
        </Switch>
        
        
      </Router>
   
  );
}

export default App;
