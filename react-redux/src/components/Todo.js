import React from "react";
import { connect } from "../../node_modules/react-redux/dist/react-redux";
import { actionCreator } from "../store";
import { Link } from "../../node_modules/react-router-dom/dist/index";

const Todo = ({text, id, onBtnClick}) => {
    return (
        
        <li>
            <Link to={`/${id}`}>
                {text}<button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        onBtnClick: () => dispatch(actionCreator.deleteTodo(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps) (Todo);