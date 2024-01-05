import { useState } from "react";
import { connect } from "../../node_modules/react-redux/dist/react-redux";
import { actionCreator } from "../store";
import Todo from "../components/Todo";

const Home = ({todos, addTodo}) => {
    //console.log(todos, addTodo);

    const [text,setText]=useState('');

    const onChange = (e) => {
        setText(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        addTodo(text); //action으로 text 넘겨주기
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map((todo)=>(<Todo {...todo} key={todo.id}/>))}
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {todos: state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: text => dispatch(actionCreator.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);