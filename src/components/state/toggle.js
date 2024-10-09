import React, { useState } from 'react';
import "./toggle.css"

const Toggle = () => {
    const [on, setOn] = useState(false)
    const array = useState(false)
    console.log(array)
    const say = () =>{
        setOn((on) => !on)
    }
    return (
      <div>
        <div className={`toggle ${on ? 'active' : ''}`} onClick={say}>
          <div className={`spinner ${on ? 'active' : ''}`}></div>
        </div>
        {on ? 'On' : 'Off'}
        <div className="toggle-control">
          <div className="toggle-on" onClick={() => setOn(true)}>
            On
          </div>
          <div className="toggle-off" onClick={() => setOn(false)}>
            Off
          </div>
        </div>
      </div>
    );
};

export default Toggle;