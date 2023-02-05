// import './App.css';
// import {connect} from "react-redux";
// import TaskList from "./TaskList";
//
// function App(props) {
//
//     const {header, version} = props;
//
//     return (
//         <div className="App">
//             <h1>{header}</h1>
//             <h3>{version}</h3>
//             <TaskList/>
//         </div>
//     );
// }
//
// const mapStateToProps = state => ({
//     header: state.appHeader,
//     version: state.version
// })
//
// export default connect(mapStateToProps)(App);


// orderNumber: {type: Number, required: false},
// clientName: {type: String, required: true},
// service: {
//     job: {type: String, required: true},
//     employee: {type: String, required: false},
//     price: {type: Number, required: true},
//     primeCost: {type: Number, required: false},
//     createAt: {type: String, required: false},
// },
// sentToDo: {
//     date: {type: String, required: false},
//     status: {type: Boolean, required: false}
// },
// completed: {
//     date: {type: String, required: false},
//     status: {type: Boolean, required: false}
// },
// sayToClient: {
//     date: {type: String, required: false},
//     status: {type: Boolean, required: false}
// },
// clientReceived: {
//     date: {type: String, required: false},
//     status: {type: Boolean, required: false}
// },
// paid: {
//     payment: {type: Number, required: false},
//     debt: {type: Number, required: false},
//     primeCost: {type: Number, required: false},
//     date: {type: String, required: false},
//     status: {type: Boolean, required: false}
// }

// import './App.css';
// import React from 'react';
// import {connect} from "react-redux";
// import TaskList from "./TaskList";
// import Navbar from "./Navbar";
// import Home from "./Home";
//
// const App = (props) => {
//     return (
//         <div className='App'>
//             <Navbar/>
//             {/*<Home/>*/}
//             <h1>{props.appName}</h1>
//             <h3>{props.version}</h3>
//             <TaskList/>
//         </div>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     appName: state.appHeader,
//     version: state.version
// })
//
// export default connect(mapStateToProps)(App);

// import './App.css';
// import React from 'react';
// import {connect} from "react-redux";
// import TaskList from "./TaskList";
//
// const App = (props) => {
//     return (
//         <div className='App'>
//             <h1>{props.appName}</h1>
//             <h6>version: {props.version}</h6>
//             <TaskList/>
//         </div>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     appName: state.appHeader,
//     version: state.version
// })
//
// export default connect(mapStateToProps)(App);

import './App.css';
import React from 'react';
import {connect} from "react-redux";
import TaskList from "./TaskList";

const App = (props) => {
    return (
        <div className='App'>
            <h1>{props.appHeader}</h1>
            <h6>version: {props.version}</h6>
            <TaskList/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    appHeader: state.appHeader,
    version: state.version
})
export default connect(mapStateToProps)(App);







































