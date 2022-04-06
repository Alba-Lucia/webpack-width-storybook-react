import { useState } from 'react'
import "./Checkbox.css"


const Checkbox = () => {
    const [toggle, setToggle ] = useState(false);
    
    const ToggleCheck = () => setToggle(!toggle)

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