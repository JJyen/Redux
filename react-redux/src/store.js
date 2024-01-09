import {legacy_createStore as createStore} from "redux";
import { createAction } from "@reduxjs/toolkit";


// const ADD = "ADD";
// const DELETE = "DELETE"

// //action creator
// const addTodo = (text) => {
//     return {
//         type: ADD,
//         text,
//     }
// };

// const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     }
// }

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const storedTodo = JSON.parse(localStorage.getItem("todo"));

const reducer = (state = storedTodo || null, action) => {
  console.log(action, addTodo(), deleteTodo());

  switch(action.type){
    case addTodo.type:
      const newTodos = [{text: action.payload, id: Date.now()}, ...state];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    case deleteTodo.type:
      const delTodo = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(delTodo));
      return delTodo;
    default:
      return state;
  }
}

const store = createStore(reducer);

//action creator store에서 export
export const actionCreator = {
    addTodo,
    deleteTodo
};


export default store;