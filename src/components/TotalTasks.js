import React from "react";
import { UseDispatch, useSelector } from "react-redux";

const TotalTask=()=>{
    const tasks=useSelector((state)=>state.tasks);

    return(
        <div>
            <h3>Total Task: {tasks.length}</h3>
        </div>
    )
}

export default TotalTask;