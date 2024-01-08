import React from "react";
import { connect } from "../../node_modules/react-redux/dist/react-redux";
import { useParams } from "../../node_modules/react-router-dom/dist/index";

const Detail = ({todo}) => {
    console.log(todo);
    const myId = useParams().id;
    const _todo = todo.find(__todo => __todo.id === parseInt(myId));
    return (
        <>
            <h1>{_todo?.text}</h1>
            <h5>Create at: {_todo?.id}</h5>
        </>
    )
}

const mapStateToProps = (state,ownProps) => {
    console.log("ssss",state, ownProps);
    return {
        todo: state
    }
}

export default connect(mapStateToProps) (Detail);