import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videoReducer from "./videos";
import watchedReducer from "./watchedCounter"
import detailReducer from "./details"
import api from "./middleware/api";

export default function store() {
    return configureStore({
        reducer: {
            videos: videoReducer,
            watched: watchedReducer,
            details: detailReducer,
        },
        middleware: [...getDefaultMiddleware(), api],
    });
}