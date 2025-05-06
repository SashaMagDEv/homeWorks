import { takeEvery, put, delay } from 'redux-saga/effects';
import { ADD_TODO, LOAD_TODOS } from '../index';

function* addTodoSaga(action) {
    yield delay(500);
    yield put({ type: ADD_TODO, payload: action.payload });
}

function* loadTodosSaga() {
    yield delay(1000);
    const fakeTodos = [
        { id: 1, text: 'Sample Task 1', completed: false },
        { id: 2, text: 'Sample Task 2', completed: true },
    ];
    for (const todo of fakeTodos) {
        yield put({ type: ADD_TODO, payload: todo.text });
    }
}

export function* watchTodoActions() {
    yield takeEvery('ASYNC_ADD_TODO', addTodoSaga);
    yield takeEvery(LOAD_TODOS, loadTodosSaga);
}
