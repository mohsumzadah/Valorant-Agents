import React from "react-dom";
import { useState, useEffect } from "react";
import Agent from "./Agent";

function Main(){
    const [agents, setAgents] = useState(false);

    useEffect(() =>{
      fetch("https://valorant-api.com/v1/agents/?isPlayableCharacter=true")
      .then(res => {
        if(res.ok && res.status === 200){
          return res.json();
        }
      })
      .then(jsonData => {
        setAgents(jsonData.data);
  
      })
      .catch(err => console.log(err))
    })

    return <div className="agents-container">
        {agents && agents.map(agent => {
            return <Agent agentImg={agent.displayIcon} agentName={agent.displayName}/>
        })}
    </div>
}

export default Main