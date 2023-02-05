// import React from 'react';
// import {connect} from "react-redux";
//
// const Task = (props) => {
//
//     const {task} = props;
//
//     return (
//         <li>
//             {task.title}
//             <button onClick={() => props.deleteTask(task.id)}>🗑️</button>
//         </li>
//     );
// };
//
// const mapDispatchToProps = dispatch => ({
//     deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id})
// })
//
// export default connect(null, mapDispatchToProps)(Task);


// import React from 'react';
// import {connect} from "react-redux";
//
// const Task = (props) => {
//     return (
//         <li>
//             {props.task.title}
//             <button onClick={() => props.deleteTask(props.task.id)}>🗑️</button>
//         </li>
//     );
// };
//
// const mapDispatchToProps = (dispatch) => ({
//     deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id})
// })
//
// export default connect(null, mapDispatchToProps)(Task);


// import React from 'react';
// import {connect} from "react-redux";
//
// const Task = (props) => {
//     return (
//         <li style={props.task.isDone ? {textDecoration: 'line-through'} : {}}>
//             {props.task.title}
//             <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
//             <button onClick={() => props.taskDone(props.task.id)}>Done</button>
//             <button disabled={props.index === 0} onClick={() => props.taskMoveUp(props.task.id)}>↑</button>
//             <button disabled={props.index === props.todoListLastIndex} onClick={() => props.taskMoveDown(props.task.id)}>↓</button>
//             <button>Edit</button>
//         </li>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     todoListLastIndex: state.todoList.length - 1
// })
//
// const mapDispatchToProps = (dispatch) => ({
//     deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
//     taskDone: (id) => dispatch({type: 'TASK_DONE', payload: id}),
//     taskMoveUp: (id) => dispatch({type: 'TASK_MOVE_UP', payload: id}),
//     taskMoveDown: (id) => dispatch({type: 'TASK_MOVE_DOWN', payload: id})
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Task);


import React, {useState} from 'react';
import {connect} from "react-redux";


const Task = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const saveBtnHandler = () => {
        toggle()
        props.updateTask(props.task.id, inputValue )
        setInputValue('')
    }

    const cancelBtnHandler = () => {
        toggle()
        setInputValue('')
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <li style={props.task.isDone ? {textDecoration: 'line-through'} : null}>
                {props.task.title}
                <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
                <button onClick={() => props.checkIsDone(props.task.id)}>Done</button>
                <button disabled={props.index === 0} onClick={() => props.moveTask(props.task.id, 'up')}>↑</button>
                {props.index !== props.taskLength - 1 &&
                    <button onClick={() => props.moveTask(props.task.id, 'down')}>↓</button>}
                <button onClick={toggle}>Update</button>
                {isOpen && <>
                    <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                    <button onClick={saveBtnHandler}>Save</button>
                    <button onClick={cancelBtnHandler}>Cancel</button>
                </>}
            </li>
        </div>
    );
};

const mapStateToProps = (state) => ({
    taskLength: state.todoList.length
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    checkIsDone: (id) => dispatch({type: 'CHECK_IS_DONE', payload: id}),
    moveTask: (id, direction) => dispatch({type: 'MOVE_TASK', payload: {id, direction}}),
    updateTask: (id, title) => dispatch({type: 'UPDATE_TASK', payload: {id, title}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);






















