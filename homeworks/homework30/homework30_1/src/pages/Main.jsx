import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacterById } from '../store/features/character/characterThunks';
import CharacterDetails from '../components/CharacterDetails';

const Main = () => {
    const [id, setId] = useState(1);
    const dispatch = useDispatch();

    const handleFetch = () => {
        dispatch(fetchCharacterById(id));
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
