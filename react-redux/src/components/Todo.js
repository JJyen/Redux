import React from "react";
import { connect } from "../../node_modules/react-redux/dist/react-redux";
import { actionCreator } from "../store";

const Todo = ({text, onBtnClick}) => {
    return (
        
        <li>
            {text}<button onClick={onBtnClick}>DEL</button>
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