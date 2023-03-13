import React from "react";
import { useState } from "react";

function Agent(props){
    
    const [bgColor, setBGColor] = useState("#EEEEEE")


    function colorSwitch(event){
        if(bgColor === "#EEEEEE"){
            setBGColor("#00ADB5");
        }else{
            setBGColor("#EEEEEE");
        }
    }

    return <div className="agent-card" onMouseOver={colorSwitch} onMouseOut={colorSwitch} style={{backgroundColor: bgColor}}>
        <img src={props.agentImg} alt={props.agentName+"_img"} />
        <h2>{props.agentName}</h2>
    </div>
}

export default Agent;