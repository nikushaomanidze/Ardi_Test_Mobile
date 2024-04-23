import { BlogPostsResponse, ModifyPostInput } from "../types";
import { api } from "./api";

export const servicesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPost: build.query<BlogPostsResponse, void>({
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
        modifyPost: build.mutation<void, ModifyPostInput>({
            query: ({ id, body }) => ({
                url: `/blog-post/${id}`,
                method: "PATCH",
                body,
            }),
        }),
    }),


});

export const { useLazyGetPostQuery, useDeletePostMutation, useAddPostMutation, useModifyPostMutation } = servicesApi;

