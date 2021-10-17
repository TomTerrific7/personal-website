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
                <div className="general">
                <h2>About Me
                <hr color="black" size="2" width="200" align="center"></hr>
                </h2>
                <Typography variant="h3">I am married to my best friend Katie and we have a dog named Snacks. He is a German Shorthaired Pointer. I have only been a developer for a year, as I was previously a personal trainer for 4 years in Denver, Colorado. We moved from Denver to Atlanta right when Covid happened, and that is when I decided to dedicate all of my time to development. </Typography>
                </div>
                
                <div className="hobbies">
                <h2>Hobbies
                <hr color="black" size="2" width="200" align="center"></hr>
                </h2>
                <Typography variant="h3">Cooking,&nbsp;Travel,&nbsp;Gaming,&nbsp;Reading,&nbsp;Coding, Gym,&nbsp;Sports&nbsp;Investing,&nbsp;French&nbsp;Language</Typography>
                </div>

                <div className="skills">
                <h2>Skills
                <hr color="black" size="2" width="200" align="center"></hr>
                </h2>
                <Typography variant="h3" >React Solidity </Typography>
                </div>
                <div className="education">
                <h2>Education
                <hr color="black" size="2" width="200" align="center"></hr>
                </h2>
                <Typography variant="h3" >Purdue&nbsp;University&nbsp;Global B.S&nbsp;in&nbsp;Cybersecurity<br/><br/>Chainshot&nbsp;Ethereum&nbsp;Developer&nbsp;Bootcamp Certified&nbsp;Ethereum&nbsp;Developer</Typography>
                </div>
                
                
                
            
        </div>
    );
};

export default About;