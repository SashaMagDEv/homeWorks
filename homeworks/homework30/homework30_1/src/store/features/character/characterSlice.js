import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterById } from './characterThunks';

const initialState = {
    character: null,
    loading: false,
    error: null,
};

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        clearCharacter: (state) => {
            state.character = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacterById.fulfilled, (state, action) => {
                state.loading = false;
                state.character = action.payload;
            })
            .addCase(fetchCharacterById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { clearCharacter } = characterSlice.actions;
export default characterSlice.reducer;
