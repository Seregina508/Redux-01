// import React from 'react';
// import {connect} from "react-redux";
// import Task from "./Task";
// import CreateTask from "./CreateTask";
//
// const TaskList = (props) => {
//
//     const {tasks} = props;
//
//     return (
//         <div>
//             <CreateTask/>
//             <ul style={{listStyleType: 'none'}}>
//                 {tasks.map(task => <Task
//                 task={task}
//                 />)}
//             </ul>
//         </div>
//     );
// };
// const mapStateToProps = state => ({
//     tasks: state.todoList,
// })
// export default connect(mapStateToProps)(TaskList);


// import React from 'react';
// import {connect} from "react-redux";
// import Task from "./Task";
// import CreateTask from "./CreateTask";
//
// const TaskList = (props) => {
//     return (
//         <div>
//             <CreateTask/>
//             <ul style={{listStyleType: 'none'}}>
//                 {props.tasks.map(task => <Task
//                     task={task}
//                 />)}
//             </ul>
//
//         </div>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     tasks: state.todoList
// })
//
// export default connect(mapStateToProps)(TaskList);


// import React from 'react';
// import {connect} from "react-redux";
// import Task from "./Task";
// import CreateTask from "./CreateTask";
//
// const TaskList = (props) => {
//     return (
//         <div>
//             <CreateTask/>
//             <ul style={{listStyleType: 'none'}}>
//                 {props.tasks.map((task, index) => <Task
//                     task={task}
//                     key={task.id}
//                     index={index}
//                 />)}
//             </ul>
//         </div>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     tasks: state.todoList
// })
//
// export default connect(mapStateToProps)(TaskList);


import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import CreateTask from "./CreateTask";

const TaskList = (props) => {
    return (
        <div>
            <CreateTask/>
            <ul>
                {props.tasks.map((task,index) => <Task
                    task={task}
                    key={task.id}
                    index={index}

                />)}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.todoList
})

export default connect(mapStateToProps)(TaskList);














































