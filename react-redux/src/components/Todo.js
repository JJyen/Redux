import React from "react";
import { useDispatch } from "../../node_modules/react-redux/dist/react-redux";
import { remove } from "../redux/updateTodos";
import { Link } from "../../node_modules/react-router-dom/dist/index";

const Todo = ({text, id}) => {
    const dispatch = useDispatch();

    const onBtnClick = () => {
        dispatch(remove(id));
    }
    
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    );
}

export default Todo;