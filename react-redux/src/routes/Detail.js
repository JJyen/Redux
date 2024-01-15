import React from "react";
import { useSelector } from "../../node_modules/react-redux/dist/react-redux";
import { useParams } from "../../node_modules/react-router-dom/dist/index";

const Detail = () => {
    const pageId = useParams().id;
    const todoDetail = useSelector(state => state.update);
    const _todo = todoDetail.find(todo =>todo.id === parseInt(pageId));
    return (
        <>
            <h1>{_todo?.text}</h1>
            <h5>Create at: {_todo?.id}</h5>
        </>
    )
}

export default Detail;