import './App.css';
import React, {useLayoutEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Typography } from '@mui/material';







function App() {
 


  
  return (

    <Router>
     
      <Navbar/>
      
      <Typography>
      
         <Switch>
          <Route path='/about' component ={About} />
          <Route path='/projects' component ={Projects} />
          <Route path='/contact' component ={Contact} />
          <Route path='/' component ={Home} />
         
          </Switch>
        
        
        
        </Typography>
        
       
      </Router>
      
      
     
      
     
  );
}

export default App;