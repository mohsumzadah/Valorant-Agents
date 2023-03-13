import React from "react-dom";
import { useState, useEffect } from "react";
import Agent from "./Agent";

function Main({searchValue}){
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

    if (!agents) {
      return <div>Loading...</div>;
    }

    const filteredAgents = agents.filter((agent) => {
      if (searchValue === "") {
        return true;
      }
      return agent.displayName.toLowerCase().includes(searchValue.toLowerCase());
    });

    return <div className="agents-container">
        {filteredAgents.map((agent) => {
          return <Agent key={agent.uuid} agentImg={agent.displayIcon} agentName={agent.displayName} />;
      })}
    </div>
}

export default Main