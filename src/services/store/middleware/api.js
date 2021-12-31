import axios from "axios";
import * as actions from "../api";

const api = 
    ({dispatch}) => 
    (next) => 
    async (action) => {
        if (action.type !== actions.apiFetchBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } = action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const key = process.env.REACT_APP_YOUTUBE_KEY;
            const URLParams = method === "GET" 
                ? "?" + new URLSearchParams({ ...data,  key }).toString()
                : "";

            const response = await axios.request({
                baseURL: "https://youtube.googleapis.com/youtube/v3",
                url: `${url}${URLParams}`,
                method,
                data,
            });

            dispatch(actions.apiFetchSuccess(response.data));            
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data })
        } catch (error) {
            dispatch(actions.apiFetchFailed(error.message));
            if (onError) dispatch( {type: onError, payload: error.message});
        }
    };

export default api;