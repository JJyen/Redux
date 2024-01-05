import {legacy_createStore as createStore} from "redux"

const ADD = "ADD";
const DELETE = "DELETE"

//action creator store에서 export
export const addTodo = (text) => {
    return {
        type: ADD,
        text,
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        id,
    }
}

const reducer = (state=[],action) => {
    switch(action.type){
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    };
};

const store = createStore(reducer);

export default store;