import { useState } from 'react'
import React from 'react'
import "./Checkbox.css"


const Checkbox = () => {
    const [toggle, setToggle ] = useState(false);
    
    const ToggleCheck = ()  => {
        toggle ? setToggle(false) : setToggle(true)
        console.log(toggle)
    }
    

  return (
    <label className={toggle ? "switch-on" : "switch-of"}>
        <input 
            onClick={ToggleCheck}
            type="checkbox" 
            id='check'
        />
        <span className={toggle ? "check" : "uncheck"}></span>
    </label>
  )
}

export default Checkbox