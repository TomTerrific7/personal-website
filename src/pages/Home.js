import React from 'react';
import {Button, Typography, ThemeProvider, createTheme, Container} from '@material-ui/core';
import Background from '../themes/Background';
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
    fontSize: 28,
    fontWightLight: 400,
    fontWightLight:500,
    fontWightLight: 600,
    fontWightLight: 700,
    
  },
  root: {
    height: "100vh",
    background: "linear-gradient(#ff9800 30%, #ffc107 90%)"
    
  }
  
 
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(#ff9800 30%, #ffc107 90%)"
    
  }
  
 
}));


function Home() {
  const classes = useStyles();
  
 
  return (
    <div className="homepage">
    <div className={classes.root}>
      
    
        <ThemeProvider theme={theme}>
          
          <br/>
          <Typography>
        <h1>Hi, I'm Dilan. I'm a software developer</h1>
        </Typography>
        
      
      </ThemeProvider>
      </div>
      </div>
    
    
    
  )
  
}
export default Home;



