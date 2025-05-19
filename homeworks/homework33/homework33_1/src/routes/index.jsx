import React from 'react';
import ResumePage from '../pages/ResumePage.jsx';
import TodoPage from "../pages/TodoPage.jsx";
import SwapiPage from "../pages/SwapiPage.jsx";

const routes = [
    {
        path: '/',
        element: <ResumePage />
    },
    {
        path: '/todo',
        element: <TodoPage />
    },
    {
        path: '/swapi',
        element: <SwapiPage />
    }
];

export default routes;