import { createAction } from "@reduxjs/toolkit";

export const apiFetchBegan = createAction("api/fetchBegin");
export const apiFetchSuccess = createAction("api/fetchSuccess");
export const apiFetchFailed = createAction("api/fetchFailed");