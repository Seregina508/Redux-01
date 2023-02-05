// import React, {useState} from 'react';
// import {connect} from "react-redux";
//
// const CreateTask = (props) => {
//
//     const [input, setInput] = useState('');
//
//     const createBtnHandler = () => {
//         props.addTask(input)
//         setInput('')
//     }
//
//     return (
//         <div>
//             <input type="text" value={input} placeholder='input new task name' onChange={e => setInput(e.target.value)}/>
//             <button onClick={createBtnHandler}>Create Task</button>
//
//         </div>
//     );
// };
//
// const mapDispatchToProps = dispatch => ({
//     addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
// })
// export default connect(null, mapDispatchToProps)(CreateTask);


// import React, {useState} from 'react';
// import {connect} from "react-redux";
//
// const CreateTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('')
//
//     const createBtnHandler = () => {
//         props.addTask(inputValue)
//         setInputValue('')
//     }
//
//     return (
//         <div>
//             <input type="text"
//                    value={inputValue}
//                    placeholder='Create new task'
//                    onChange={event => setInputValue(event.target.value)}
//             />
//             <button onClick={createBtnHandler}>Create Task</button>
//
//         </div>
//     );
// };
// const mapDispatchToProps = (dispatch) => ({
//     addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
// })
//
// export default connect(null, mapDispatchToProps)(CreateTask);


// import React, {useState} from 'react';
// import {connect} from "react-redux";
//
// const CreateTask = (props) => {
//
//     const [inputValue, setInputValue] = useState('')
//
//     const createBtnHandler = () => {
//         props.addTask(inputValue)
//         setInputValue('')
//     }
//
//     return (
//         <div>
//             <input type="text"
//                    placeholder='Create new task'
//             value={inputValue}
//             onChange={event => setInputValue(event.target.value)}
//             />
//             <button onClick={createBtnHandler}>Create Task</button>
//
//         </div>
//     );
// };
//
// const mapDispatchToProps = (dispatch) => ({
//     addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
// })
//
// export default connect(null, mapDispatchToProps)(CreateTask);


import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

    const [inputValue, setInputValue] = useState('')

    const createBtnHandler = () => {
        props.addTask(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input type="text"
                   placeholder='new task name'
                   value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={createBtnHandler}>Add Task</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
})

export default connect(null, mapDispatchToProps)(CreateTask);




































