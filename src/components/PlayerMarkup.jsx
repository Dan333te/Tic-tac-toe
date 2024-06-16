import React, { useState } from "react";

const Player = ({ player="abdullah", symbol="O",active }) => {
const [isEditing,setIsEditing]=useState(false)
const [name,setName]=useState(player)

  return (
    <li className={active?'active':''} >
      <span className="player">
     { !isEditing &&  <span className="player-name">{!name?player:name}</span>}
     { isEditing &&  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
     
      <button onClick={()=>setIsEditing(prev=>!prev)}>{isEditing?'done':'edit'}</button>
    </li>
  );
};

export default Player;
