import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoInitialState, TypeToDo } from '../types/type'
const initialState:ToDoInitialState = {
   todos :[]
  }
  export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createToDo:(state:ToDoInitialState,action:PayloadAction<TypeToDo>)=>{
            state.todos=[...state.todos,action.payload]
        }
    }})
    export const { createToDo} = ToDoSlice.actions

export default ToDoSlice.reducer