import React from 'react';
import Resume from '../pages/Resume';
import TodoApp from "../pages/TodoApp.jsx";

const routes = [
    {
        path: '/',
        element: <Resume />
    },
    {
        path: '/todo',
        element: <TodoApp />
    }
];

export default routes;