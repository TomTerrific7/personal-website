import React from 'react';
import { Typography, ThemeProvider, createTheme} from '@material-ui/core';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesConfig';
import {makeStyles} from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#ffc107',
      main: "#ff9800",
      dark: '#ff5722',
      
    }
  },

  typography: {
    
    fontFamily: 'Noto Sans Mono',
    fontSize: 18,
    fontWeightLight: 400,
    fontWeightRegular:500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
    h3: {
      fontFamily: 'Source Code Pro',
      fontWeightLight: 200,
      fontSize:16,
    }
  },
  
 
  
 
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(#74EBD5, #9FACE6)"
    
  }
  
 
}));


function Home() {
  const classes = useStyles();
  
 
  return (
    
    
    
      <div class="App" style={{ position: 'relative', overflow: "hidden"}}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
    <div className={classes.root}>
    
    
        <ThemeProvider theme={theme}>
        
          
          <br />
          <br/>
          <br/>
          
          
          <Typography>
        <h1>Hi, I'm Dilan.<br/> I'm a software developer.</h1>
        </Typography>
        <Typography variant="h3"> I think of myself as a creator. I love to start from scratch,<br/> whether it be developing a personal website, a smart contract, or<br/>even cooking a delicious meal, as the results are much more enjoyable.<br/><br/><br/>A few of my core values are honesty, inclusion, personal development,<br/> generosity, and humanity as a whole. I let these ideals guide me in whatever <br/>circumstances life may bring.  </Typography>
        <br/><br/>
        <hr color="black" size="1" width="700" align="left"></hr>
        
      
      </ThemeProvider>
      </div>
      </div>
     
    
     
    
  )
  
}
export default Home;



