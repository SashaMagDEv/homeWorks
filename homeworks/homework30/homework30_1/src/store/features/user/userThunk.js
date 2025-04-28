import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId, thunkAPI) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'Не вдалося завантажити користувача');
        }
    }
);