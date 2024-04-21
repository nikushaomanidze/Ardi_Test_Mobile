import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import postSlice from '../slices/GetPosts'

const rootReducer = combineReducers({
  posts: postSlice, // Use postSlice.reducer instead of postSlice
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;