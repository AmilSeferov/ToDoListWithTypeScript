import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoInitialState, TypeToDo } from "../types/type";
const initialState: ToDoInitialState = {
  todos: [],
};
export const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createToDo: (state: ToDoInitialState, action: PayloadAction<TypeToDo>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeToDo: (state: ToDoInitialState, action: PayloadAction<number>) => {
      state.todos = [
        ...state.todos.filter((item) => item.id !== action.payload),
      ];
    },
    editToDo: (state: ToDoInitialState, action: PayloadAction<TypeToDo>) => {
      state.todos = [
        ...state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      ];
    },
  },
});
export const { createToDo, removeToDo, editToDo } = ToDoSlice.actions;

export default ToDoSlice.reducer;
