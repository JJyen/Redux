import { createSlice } from "@reduxjs/toolkit";

const getStoredTodo = localStorage.getItem("todo");
const storedTodo = getStoredTodo ? JSON.parse(getStoredTodo) : [];

const updateSlice = createSlice({
  name: "update",
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

export const {add, remove} = updateSlice.actions; 

console.log(add());

const updateReducer = updateSlice.reducer;
export default updateReducer;