import { createSlice } from "@reduxjs/toolkit";
import { apiFetchBegan } from "./api";

const slice = createSlice({
    name: "details",
    initialState: {
        items:[{
                id: {
                    videoId: ""
                },
                snippet: {
                    title: "Loading description",
                    thumbnails: {
                        standard: {
                            url: ""
                        }
                    },
                    description: "Loading description"
                }
        }],
        loading: false,
        error: undefined
    },
    reducers: {
        detailsRequested: (state, action) => {
            state.loading = true;
        },

        detailsReceived: (state, action) => {
            state.items = action.payload.items;
            state.loading = false;
        },

        detailsRequestFailed: (state, action) => {
            state.loading = false;
            state.loading = action.payload;
        }
    }
});

export default slice.reducer;

const { detailsRequested, detailsReceived, detailsRequestFailed } = slice.actions;

export const fetchDetails = (videoId) => (dispatch) => {
    const data = {
        id: videoId,
        part: 'snippet'
    };
    return dispatch (
        apiFetchBegan({
            url: '/videos',
            method: 'GET',
            data,
            onStart: detailsRequested.type,
            onSuccess: detailsReceived.type,
            onError: detailsRequestFailed.type,
        })
    );
};
