import {createStore} from "@reduxjs/toolkit";
import taskReducer from "./task/task.reducer";
 

const store=createStore(taskReducer);

export default store;
