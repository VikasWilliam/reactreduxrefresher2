import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTask } from "../store/task/task.actions";

const AddTask = () =>{
    const [task, setTask]= useState("");
    const [error, setError]= useState("");
    const dispatch= useDispatch();
    const tasks = useSelector((state)=>state.tasks);

    const handleAddTask = () =>{
        if(task.trim().length===0){
            setError("Task cannot be empty");
            return;
        }
        console.log("task==>",task)
        dispatch(addTask(task));
        setTask("");
    };

    useEffect(()=>{
        console.log(tasks)
    },[tasks]);

    return(
        <div>
            <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
        />
        <button className="btn btn-warning mt-2" onClick={handleAddTask} >Add Task</button>
        <p>{error}</p>
        </div>
        
    )
}

export default AddTask;