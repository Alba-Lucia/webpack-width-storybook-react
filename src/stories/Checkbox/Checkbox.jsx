import { useState } from 'react'
import "./Checkbox.css"


const Checkbox = () => {
    const [toggle, setToggle ] = useState(false);
    
    const toggleCheck = () => setToggle(!toggle)

  return (
    <label className={toggle ? "switch-on" : "switch-of"}>
        <input 
            onClick={toggleCheck}
            type="checkbox" 
            id='check'
        />
        <span className={toggle ? "check" : "uncheck"}></span>
    </label>
  )
}

export default Checkbox