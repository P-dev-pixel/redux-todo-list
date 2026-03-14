import {configureStore} from '@reduxjs/toolkit';
import  taskReducer from '../feature/task/createSlice'

export const store = configureStore({
    reducer:{
        taskList: taskReducer
    }
})