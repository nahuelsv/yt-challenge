import { createSlice } from "@reduxjs/toolkit";
import { apiFetchBegan } from "./api";

const slice = createSlice({
    name: "videos",
    initialState: {
        list: [ 
            { 
                id: {
                    videoId: ""
                },
                snippet: {
                    title: "Search for a video",
                    thumbnails: {},
                    description: "Search for a video"
                }
            }
        ],
        loading: false,
        error: false,
        firstSearch: true,
    },
    reducers: {
        videosRequested: (state, action) => {
            state.loading = true;
            state.error = false;
        },

        videosReceived: (state, action) => {
            state.list = action.payload.items;
            state.loading = false;
            state.firstSearch = false;

        },

        videosRequestFailed: (state, action) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export default slice.reducer;

const { videosRequested, videosReceived, videosRequestFailed } = slice.actions;

export const fetchVideos = (query) => (dispatch) => {
    const data = {
        q: query,
        part: 'snippet',
        maxResults: 4
    };
    return dispatch (
        apiFetchBegan({
            url: '/search',
            method: 'GET',
            data,
            onStart: videosRequested.type,
            onSuccess: videosReceived.type,
            onError: videosRequestFailed.type,
        })
    );
};