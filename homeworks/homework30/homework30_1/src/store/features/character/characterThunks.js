import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacterById = createAsyncThunk(
    'character/fetchById',
    async (id, thunkAPI) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/`);
        if (!res.ok) {
            throw new Error("Character not found");
        }
        const data = await res.json();
        return data;
    }
);