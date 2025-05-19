import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from './TodoPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { vi } from 'vitest';
import {removeTodo} from "../store/index.js";

const initialState = {
    todos: [
        { id: 1, text: 'Перша задача', completed: false },
        { id: 2, text: 'Друга задача', completed: true },
    ],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ASYNC_ADD_TODO':
            return { ...state, todos: [...state.todos, { id: 3, text: action.payload, completed: false }] };
        default:
            return state;
    }
}

function renderWithStore(ui, { store }) {
    return render(<Provider store={store}>{ui}</Provider>);
}

describe('TodoPage', () => {
    let store;
    let dispatchSpy;

    beforeEach(() => {
        store = createStore(reducer, initialState);
        dispatchSpy = vi.spyOn(store, 'dispatch');
    });

    test('відображає заголовок та задачі', () => {
        renderWithStore(<TodoPage />, { store });

        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByText('Перша задача')).toBeInTheDocument();
        expect(screen.getByText('Друга задача')).toBeInTheDocument();
    });

    test('додає нову задачу і очищує інпут', () => {
        renderWithStore(<TodoPage />, { store });

        const input = screen.getByPlaceholderText('Enter task');
        const addButton = screen.getByText('Додати');

        fireEvent.change(input, { target: { value: 'Нова задача' } });
        expect(input.value).toBe('Нова задача');

        fireEvent.click(addButton);

        expect(dispatchSpy).toHaveBeenCalledWith({ type: 'ASYNC_ADD_TODO', payload: 'Нова задача' });
        expect(input.value).toBe('');
    });

    test('не додає пусту задачу', () => {
        renderWithStore(<TodoPage />, { store });

        const input = screen.getByPlaceholderText('Enter task');
        const addButton = screen.getByText('Додати');

        fireEvent.change(input, { target: { value: '   ' } });
        fireEvent.click(addButton);

        expect(dispatchSpy).not.toHaveBeenCalledWith(expect.objectContaining({ type: 'ASYNC_ADD_TODO' }));
    });

    test('видаляє задачу'), () => {
        renderWithStore(<TodoPage />, { store });

        const deleteButton = screen.getAllByText('Видалити');

        expect(deleteButton.length).toBeGreaterThan(0)

        fireEvent.click(deleteButton[0])

        expect(dispatchSpy).toHaveBeenCalledWith(removeTodo(1))
    }
});
