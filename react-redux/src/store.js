import {legacy_createStore as createStore} from "redux"

const ADD = "ADD";
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

// const reducer = (state=[],action) => {
//     switch(action.type){
//         case ADD:
//             return [{text: action.text, id: Date.now()}, ...state];
//         case DELETE:
//             return state.filter(todo => todo.id !== action.id);
//         default:
//             return state;
//     };
// };

const storedTodo = JSON.parse(localStorage.getItem("todo"));

const reducer = (state = storedTodo || null, action) => {
  switch(action.type){
    case ADD:
      const newTodos = [{text: action.text, id: Date.now()}, ...(state || [])];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    case DELETE:
      const delTodo = (state || []).filter(todo => todo.id !== action.id);
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