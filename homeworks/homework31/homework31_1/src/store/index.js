import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchTodoActions } from './sagas/index.js';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const LOAD_TODOS = 'LOAD_TODOS';

export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const editTodo = (id, text) => ({ type: EDIT_TODO, payload: { id, text } });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const loadTodos = () => ({ type: LOAD_TODOS });

const initialState = {
    todos: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: uuidv4(), text: action.payload, completed: false }],
            };
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                ),
            };
        case CLEAR_COMPLETED:
            return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchTodoActions);

export default store;
