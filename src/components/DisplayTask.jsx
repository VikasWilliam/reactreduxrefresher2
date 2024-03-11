import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteTask } from "../store/task/task.actions";

const DisplayList=()=>{
    const dispatch=useDispatch();
    const tasks=useSelector((state)=>state.tasks)

    return(
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Completed</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index)=>(
                    <tr key={index}>
                        <td>{task.id}</td>
                        <td>{task.task}</td>
                        <td>{task.completed? 'Yes': 'No'}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DisplayList;
