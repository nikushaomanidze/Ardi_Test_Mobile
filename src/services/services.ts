// import {
//     ICarsTypes,
//   } from "../types";

import { api } from "./api";

export const servicesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPost: build.query<any, void>({
            query: () => ({ url: "/blog-post" }),
        }),
        deletePost: build.mutation<void, number>({
            query: (postId) => ({
                url: `/blog-post/${postId}`,
                method: "DELETE",
            }),
        }),
        addPost: build.mutation<any, any>({
            query: (body) => ({
                url: "/blog-post",
                method: "POST",
                body,
            }),
        }),
    }),


});

export const { useLazyGetPostQuery, useDeletePostMutation, useAddPostMutation } = servicesApi;

