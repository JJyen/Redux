import React from "react";
import { connect } from "../../node_modules/react-redux/dist/react-redux";
import { remove } from "../store";
import { Link } from "../../node_modules/react-router-dom/dist/index";

const Todo = ({text, id, onBtnClick}) => {
    return (
        
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps) (Todo);