import  React  from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { store, history } from './store';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </Provider>,
);
