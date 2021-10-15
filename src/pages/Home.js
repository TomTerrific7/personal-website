import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "linear-gradient(#ff9800 30%, #ffc107 90%)"
    
  }
  
 
});

export default function Home() {
  const classes = useStyles();
 
  return (
    
    <div className={classes.root}>
      <Typography variant="h1">Hi, I'm Dilan. I'm a software developer.</Typography>
    </div>
    
    
    
  )
  
}



