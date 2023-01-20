import { useState } from "react";
import React from "react";

const Count = () =>{
    const [Count ,setCount] = useState(0);
    const onButtonClick=() =>{setcCount(Count + 1)}
    return(
        <button onClick={onButtonClick}>Click Me</button>
    )
};

export default Count;