import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Home from '../pages/Home';
import {ThemeProvider, createTheme} from '@material-ui/core';

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
    fontSize: 64,
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

export default function Background() {
  const classes = useStyles();
 
  return (
    
    <div className={classes.root}>
      
    </div>
    
    
    
  )
  
}
