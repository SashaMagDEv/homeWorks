import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchUser} from '../store/features/user/userThunk.js';
import CharacterDetails from '../components/CharacterDetails';

const Main = () => {
    const [id, setId] = useState(1);
    const dispatch = useDispatch();

    const handleFetch = () => {
        dispatch(fetchUser(id));
    };

    return (
        <div>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleFetch}>Get Info</button>
            <CharacterDetails />
        </div>
    );
};

export default Main;
