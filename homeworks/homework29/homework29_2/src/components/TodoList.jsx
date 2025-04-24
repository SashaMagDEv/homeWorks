import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todos = useSelector((state) => state.todos);

    if (todos.length === 0 ) {
        return null;
    }
    const title = todos.length > 1 ? 'TODOS' : 'TODO';

    return (
        <div>
            <h3 style={{color: 'black'}}>{title}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}