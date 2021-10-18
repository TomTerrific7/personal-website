import React from "react";

const Projects = () => {
    return (
        <div class="projects"
            style={{
                display: 'flex',
                justifyContent: 'left',
                verticalAlign: 'text-top',
                height: '100vh'
                
            }}
        >
            <h1>Projects
            <h5>DecentraLearn:<h6>Only decentralized, permission-less application on the Ethereum network to broadcast educational information about any token and get people incentivized while learning about it. Uses Chainlink Keepers, Openeppelin RBAC, IPFS, React.
            <br/>Awarded Compound Finance Grant, Chanlink prize pool award, and Pocket Network Prize pool award.</h6>
            </h5>
            <h5>Russian Roulette:<h6>Simple Russian Roulette game on the Ethereum blockchain that uses Chainlink VRF every round until a winner is chosen.
            <br/>Final Project in Chainshot Ethereum Bootcamp</h6>
            </h5>
            <h5>Chainlink-Lottery:<h6>Simple Lottery on the Ethereum blockchain using Chainlink VRF and Chainlink Keepers. 
            <br/>This is still an ongoing project.</h6>
            </h5>
            
            </h1>
            
            
            
        </div>
        
    );
};

export default Projects;