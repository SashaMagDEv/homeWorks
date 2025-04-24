import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

export default function App() {
    return (
        <div className={"wrap"}>
            <Header />
            <main className={"container"}>
                <TodoForm />
                <TodoList />
            </main>
            <Footer />
        </div>
    );
}