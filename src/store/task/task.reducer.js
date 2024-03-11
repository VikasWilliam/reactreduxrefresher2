const initialState={
    tasks: []
};

let id=0;

const taskReducer = (state = initialState , action) =>{
    switch (action.type){
        case 'GET_TASKS':
            return{
                ...state
            }
        case 'ADD_TASK':
            return{
                ...state,
                tasks:[...state.tasks ,{id: ++id, task:action.payload, completed:false} ]
            }
        case 'DELETE_TASK':
            return{
                ...state,
                tasks: state.tasks.filter(task=>task.id !== action.payload)
            }
            default:
                return state;
    }
}

export default taskReducer;