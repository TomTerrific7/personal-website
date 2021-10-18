import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';
import { Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { useResizeDetector } from 'react-resize-detector';






function App() {
  
  return (

    <Router>
      
      <Navbar/>
      <div style={{ position: 'absolute'}}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
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