import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
    const todos = useSelector((state) => state.todos);

    return (
        <footer>
            <strong>Всього:</strong> {todos.length}
        </footer>
    );
}