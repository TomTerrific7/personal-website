import React from "react";
import pic from './testpic.png'

const About = () => {
    
    return ( 
        
        <div class="about"
        
            style={{
                display: 'absolute',
                justifyContent: 'left',
                verticalAlign: 'text-top',
                height: '100vh'
                
                
            }}>
               
                
               <h2 align="center">About Me
               <hr color="black" size="2" width="200" align="center"></hr>
               <h6>I am married to my best friend Katie and we have a dog named Snacks. He is a German Shorthaired Pointer. I have only been a developer for a year, as I was previously a personal trainer for 4 years in Denver, Colorado. We moved from Denver to Atlanta right when Covid happened, and that is when I decided to dedicate all of my time to development.
</h6>
</h2>
<h2 align="center">Education
               <hr color="black" size="2" width="200" align="center"></hr>
               <h6>Purdue University Global<br/>B.S in Cybersecurity<br/><br/>Chainshot  Ethereum Developer Bootcamp<br/>Certified Ethereum Developer
</h6>
</h2>

<h2 align="center">Skills
               <hr color="black" size="2" width="200" align="center"></hr>
               <h6>React, GitHub, Solidity, Finance, JavaScript, MacOs, HTML, Chainlink, CSS, IPFS, Hardhat, OpenZeppelin, Contract Deployment, Ethers.js, AWS Amplify.
</h6>
</h2>
<h2 align="center">Hobbies
               <hr color="black" size="2" width="200" align="center"></hr>
               <h6>Cooking,&nbsp;Travel,&nbsp;Gaming,&nbsp;Reading,&nbsp;Coding, Gym,&nbsp;Sports&nbsp;Investing,&nbsp;French&nbsp;Language, Golf.
</h6>
</h2>
           
                
            
        </div>
    );
};

export default About;