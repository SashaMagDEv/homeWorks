import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import './App.css';

function App() {
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Value: {value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>
                -
            </button>
        </div>
    );
}

export default App;