import React from "react";
import { Typography} from '@material-ui/core';

const About = () => {
    return ( 
        <div class="about"
            style={{
                display: 'flex',
                
                verticalAlign: 'text-top',
                height: '100vh',
                
            }}>
                
                <div className="location">
                <h2>Locations
                <hr color="black" size="2" width="200" align="center"></hr>
                </h2>
                
                <Typography>Born: Valley, Alabama<br/><br/>Current: Atlanta, Georgia<br/><br/>Other places I've lived: <br/>Burlington, Vermont<br/>Denver, Colorado<br/>Huntsville, Alabama<br/>Auburn, Alabama</Typography>
                

                </div>
            
        </div>
    );
};

export default About;