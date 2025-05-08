import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    clearCompleted,
    loadTodos,
} from '../store';

const TodoApp = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({ type: 'ASYNC_ADD_TODO', payload: text });
            setText('');
        }
    };

    return (
        <div>
            <h1 className={'mb-5'}>Todo List</h1>
            <div className={'flex gap-2.5'}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter task"
                    className={'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'}
                />
                <button onClick={handleAdd}>Додати</button>
                <button onClick={() => dispatch(loadTodos())}>Загрузить задачи</button>
            </div>
            <div>
                <ul className={'m-5'}>
                    {todos.map((todo) => (
                        <li key={todo.id} className={'flex gap-2.5 mt-1 items-center justify-between'}>
            <span
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
                            <div className={'flex gap-1'}>
                                <button onClick={() => {
                                    const newText = prompt('Edit task:', todo.text);
                                    if (newText) dispatch(editTodo(todo.id, newText));
                                }}>Edit
                                </button>
                                <button onClick={() => dispatch(removeTodo(todo.id))}>Видалити</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={() => dispatch(clearCompleted())}>Почистити задачи</button>
            </div>
        </div>
    );
};

export default TodoApp;
