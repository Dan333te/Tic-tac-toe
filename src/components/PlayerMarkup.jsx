import React, { useState } from "react";

const Player = ({ player="abdullah", symbol="O",active,onChangeName }) => {
const [isEditing,setIsEditing]=useState(false)
const [name,setName]=useState(player)
function handleEditing(){
  setIsEditing(prev=>!prev)
 isEditing? onChangeName(symbol,name):''
}
  return (
    <li className={active?'active':''} >
      <span className="player">
     { !isEditing &&  <span className="player-name">{!name?player:name}</span>}
     { isEditing &&  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
     
      <button onClick={handleEditing}>{isEditing?'done':'edit'}</button>
    </li>
  );
};

export default Player;
