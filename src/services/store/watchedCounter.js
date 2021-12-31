import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "watchedCounter",
    initialState: {
        played: false,
        counter: 0,
    },

    reducers: {
        playVideo:(state, action) => {
            state.played = true;
        },
        addToWatched: (state, action) => {
            if (state.played) {
                state.played = false;
                state.counter = state.counter +1;
            }            
        }
    }
})

export default slice.reducer;

export const { playVideo, addToWatched } = slice.actions;

