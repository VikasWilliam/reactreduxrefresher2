export const getTasks= ()=>{
    return{
        type:  'GET_TASKS'
    }
}

export const addTask = (task) =>{
    console.log("payload===>", task)
    return{
        type: 'ADD_TASK',
        payload:task
    }
}

export const deleteTask = (id) =>{
    console.log("delete action called",id)
    return{
        type: 'DELETE_TASK',
        payload: id
    }
}