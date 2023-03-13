import React from "react";
import { useState } from "react";

function Agent(props){
    
    const [bgColor, setBGColor] = useState("#EEEEEE")
    const [cursorStyle, setCursorStyle] = useState("auto")


    function colorSwitch(event){
        if(bgColor === "#EEEEEE"){
            setBGColor("#00ADB5");
            setCursorStyle("pointer");
        }else{
            setBGColor("#EEEEEE");
            setCursorStyle("auto");

        }
    }

    return <div className="agent-card" onMouseOver={colorSwitch} onMouseOut={colorSwitch} 
    style={{backgroundColor: bgColor, cursor: cursorStyle}}>
        <img src={props.agentImg} alt={props.agentName+"_img"} />
        <h2>{props.agentName}</h2>
    </div>
}

export default Agent;