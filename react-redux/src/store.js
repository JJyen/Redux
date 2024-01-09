import {legacy_createStore as createStore} from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";


/*const ADD = "ADD";
const DELETE = "DELETE"

//action creator
const addTodo = (text) => {
    return {
        type: ADD,
        text,
    }
};

const deleteTodo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id),
    }
}

const reducer = (state = storedTodo, action) => {
  switch(action.type){
    case ADD:
      const newTodos = [{text: action.text, id: Date.now()}, ...(state)];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    case DELETE:
      const delTodo = (state).filter(todo => todo.id !== action.id);
      localStorage.setItem("todo", JSON.stringify(delTodo));
      return delTodo;
    default:
      return state;
  }
}*/

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const getStoredTodo = localStorage.getItem("todo");
const storedTodo = getStoredTodo ? JSON.parse(getStoredTodo) : [];

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
})


const store = createStore(reducer);

//action creator store에서 export
export const actionCreator = {
    addTodo,
    deleteTodo
};


export default store;