import {legacy_createStore as createStore} from "redux";

const form  = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state=[],action) => {
  //console.log(state);
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()));

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
}


//ui
const paintTodos = () => {
  const todos = store.getState(); //현재의 state(todo list)를 가져온다.
  ul.innerHTML = "";
  todos.forEach(todo=>{
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id=todo.id;
    li.innerText=todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos);

const onSubmit = e => {
  e.preventDefault();
  const _todo = input.value;
  input.value="";
  dispatchAddTodo(_todo);
}

form.addEventListener("submit", onSubmit);