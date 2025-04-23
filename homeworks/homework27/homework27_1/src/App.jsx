import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Головна</Link> |
                    <Link to="/about">Про мене</Link> |
                    <Link to="/contacts">Контакти</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}