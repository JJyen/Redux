//import {legacy_createStore as createStore} from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/*const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer(storedTodo, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodos = state.concat({text: action.payload, id: Date.now()}); //....
      localStorage.setItem("todo",JSON.stringify(newTodos))
      return newTodos;
    })
    .addCase(deleteTodo, (state, action) => {
      const delTodo = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(delTodo))
      return delTodo;
    })
})*/

const getStoredTodo = localStorage.getItem("todo");
const storedTodo = getStoredTodo ? JSON.parse(getStoredTodo) : [];

const todos = createSlice({
  name: "todosReducer",
  initialState: storedTodo,
  reducers: {
    add: (state, action) => {
      const newTodos = state.concat({text: action.payload, id: Date.now()});
      localStorage.setItem("todo",JSON.stringify(newTodos))
      return newTodos;
    }, remove: (state, action) => {
      const delTodo = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(delTodo))
      return delTodo;
    }
  }
})

console.log(todos);
console.log(createSlice);

export const {add, remove} = todos.actions; 


const store = configureStore({reducer: todos.reducer});


export default store;