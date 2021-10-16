import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';






function App() {
  return (

    
    
    <Router class="App" style={{ position: 'relative', overflow: "hidden"}}>
    <div style={{ position: 'absolute'}}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
      <Navbar/>
         <Switch>
          <Route path='/about' component ={About} />
          <Route path='/services' component ={Services} />
          <Route path='/projects' component ={Projects} />
          <Route path='/contact' component ={Contact} />
          <Route path='/' component ={Home} />
          
        </Switch>
        
        
      
   
        
        
      </Router>
      
      
      
     
  );
}

export default App;