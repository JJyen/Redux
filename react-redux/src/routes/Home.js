import { useState } from "react";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import Todo from "../components/Todo";
import { add } from "../redux/updateTodos";

const Home = () => {
    const [text,setText]=useState('');
    const todos = useSelector(state => state.update);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setText(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        dispatch(add(text)); //action으로 text 넘겨주기
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


export default Home;