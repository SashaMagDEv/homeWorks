import { useState } from 'react';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    return (
        <div>
            <h2>TODO List</h2>
            <div style={{display: "flex", gap: "15px"}}>
                <input style={{width: '100%'}} value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleAdd}>Додати</button>
            </div>
            <ul>
                {todos.map((item, index) => <li style={{ textAlign: 'start'}} key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Home;