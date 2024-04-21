

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { servicesApi } from "../../services/services";

interface InitialStateType {
    isLoading: boolean;
    isError: boolean;
    postsData?: any;
}

const initialState: InitialStateType = {
    isLoading: false,
    isError: false,
    postsData: undefined,
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(servicesApi.endpoints.getPost.matchPending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.postsData = undefined;
            })
            .addMatcher(servicesApi.endpoints.getPost.matchRejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addMatcher(
                servicesApi.endpoints.getPost.matchFulfilled,
                (state, action: PayloadAction) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.postsData = action.payload;
                }
            );
    },
});

export default postSlice.reducer;