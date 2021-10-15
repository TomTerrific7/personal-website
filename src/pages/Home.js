import React from 'react';
import {Button, Typography, ThemeProvider, createTheme, Container} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import { FaThinkPeaks } from 'react-icons/fa';

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
      fontSize:14,
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
    <div className="homepage">
    <div className={classes.root}>
      
    
        <ThemeProvider theme={theme}>
          
          <br/>
          <Typography>
        <h1>Hi, I'm Dilan.<br/> I'm a software developer.</h1>
        </Typography>
        <Typography variant="h3"> Hi</Typography>
        
      
      </ThemeProvider>
      </div>
      </div>
    
    
    
  )
  
}
export default Home;



