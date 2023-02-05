// import {v4 as uuidv4} from 'uuid';
//
// const initialState = {
//     todoList: [
//         {
//             id: uuidv4(),
//             title: 'Learn JS',
//             isDone: true
//         },
//         {
//             id: uuidv4(),
//             title: 'Learn React',
//             isDone: true
//         },
//         {
//             id: uuidv4(),
//             title: 'Learn Redux',
//             isDone: true
//         },
//     ],
//     appHeader: 'Todo List',
//     version: '1.1.1',
//     menu: ['Home', 'Todo List', 'Connect', 'Setting', 'About']
// }
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_NEW_TASK':
//             return {
//                 ...state,
//                 todoList: [...state.todoList, {
//                     id: uuidv4,
//                     title: action.payload,
//                     isDone: false,
//                 }]
//             };
//
//         case 'DELETE_TASK':
//             const newList = state.todoList.filter(el => el.id !== action.payload)
//             return {
//                 ...state,
//                 todoList: newList
//             }
//
//         default:
//             return state;
//     }
// }
// export default reducer;


// import {v4 as uuidv4} from 'uuid';
//
// const initialState = {
//     todoList: [
//         {
//             id: uuidv4(),
//             title: 'Learn JS',
//             isDone: false,
//         },
//         {
//             id: uuidv4(),
//             title: 'Learn REACT',
//             isDone: false,
//         }, {
//             id: uuidv4(),
//             title: 'Get a job!!!',
//             isDone: false,
//         },
//     ],
//     appHeader: 'ToDo List',
//     version: '1.1.1',
//     menu: ['Home', 'Todo LIst', 'Contacts', 'Settings', 'About']
// }
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_NEW_TASK':
//             return {
//                 ...state,
//                 todoList: [...state.todoList, {
//                     id: uuidv4,
//                     title: action.payload,
//                     isDone: false
//                 }]
//             };
//
//         case 'DELETE_TASK':
//             const newList = state.todoList.filter(el => el.id !== action.payload)
//             return {
//                 ...state,
//                 todoList: newList
//             }
//
//         default:
//             return state;
//     }
// }
// export default reducer;


// import {v4 as uuidv4} from 'uuid';
//
// const initialState = {
//     todoList: [
//         {
//             id: uuidv4(),
//             title: 'Learn JS',
//             isDone: false,
//         },
//         {
//             id: uuidv4(),
//             title: 'Learn REACT',
//             isDone: false,
//         },
//         {
//             id: uuidv4(),
//             title: 'DO Project',
//             isDone: false,
//         },
//         {
//             id: uuidv4(),
//             title: 'Find Job',
//             isDone: false,
//         },
//     ],
//     appHeader: 'TodoList',
//     version: '1.1.1',
//     menu: ['Home', 'Todo LIst', 'Contacts', 'Settings', 'About']
//
// };
//
// const reducer = (state=initialState, action) =>{
//     switch(action.type) {
//         case 'ADD_NEW_TASK':
//             return {
//                 ...state,
//                 todoList: [...state.todoList,
//                     {
//                         id: uuidv4(),
//                         title: action.payload,
//                         isDone: false
//                     }]
//             };
//
//         case 'DELETE_TASK':
//             const deleteList = state.todoList.filter(el => el.id !== action.payload)
//             return {
//                ...state,
//                 todoList: deleteList
//             };
//
//         case 'TASK_DONE':
//              const doneList = state.todoList.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)
//             return {...state, todoList: doneList}
//
//         case 'TASK_MOVE_UP':
//             const todoList = [...state.todoList]
//             const arrayId = todoList.map(el => el.id)
//             const index = arrayId.indexOf(action.payload)
//             const currentTask = todoList[index]
//             todoList[index] = todoList[index - 1]
//             todoList[index - 1] = currentTask
//             return {...state, todoList}
//
//         case 'TASK_MOVE_DOWN':
//             const todoListDown = [...state.todoList]
//             const arrayIdDown = todoListDown.map(el => el.id)
//             const indexDown = arrayIdDown.indexOf(action.payload)
//             const currentTaskDown = todoListDown[indexDown]
//             todoListDown[indexDown] = todoListDown[indexDown + 1]
//             todoListDown[indexDown + 1] = currentTaskDown
//             return {...state, todoList: todoListDown}
//
//         case 'UPDATE_TASK':
//             return state;
//
//         default:
//             return state;
//     }
// }
// export default reducer;


import {v4 as uuidv4} from 'uuid';

const initialState = {
    todoList: [
        {
            id: uuidv4(),
            title: 'Learn JS',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'Learn React',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'Learn Redux',
            isDone: false
        },
    ],
    appHeader: 'Todo List',
    version: '1.1.1',
    menu: ['Home', 'Todo LIst', 'Contacts', 'Settings', 'About']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_TASK':
            return {...state, todoList: [...state.todoList, {id: uuidv4(), title: action.payload, isDone: false}]};

        case 'DELETE_TASK':
            const deleteTask = state.todoList.filter(el => el.id !== action.payload)
            return {...state, todoList: deleteTask};

        case 'CHECK_IS_DONE':
            const checkTask = state.todoList.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)
            return {...state, todoList: checkTask}

        case 'MOVE_TASK':
            const currentIndex = state.todoList.indexOf(state.todoList.find(el => el.id === action.payload.id))
            console.log(currentIndex)
            const currentTodoList = [...state.todoList]
            const value = action.payload.direction === 'up' ? -1 : 1;
            [currentTodoList[currentIndex], currentTodoList[currentIndex + value]] = [currentTodoList[currentIndex + value], currentTodoList[currentIndex]]
            return {...state, todoList: currentTodoList}

        case 'UPDATE_TASK':
            const updateTodo = state.todoList.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
            return {...state, todoList: updateTodo}

        default:
            return state;
    }
}
export default reducer;










































