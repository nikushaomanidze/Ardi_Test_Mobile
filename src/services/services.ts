// import {
//     ICarsTypes,
//   } from "../types";

import { api } from "./api";

export const servicesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPost: build.query<any, void>({
            query: () => ({ url: "/blog-post" }),
        }),
    }),
});

export const { useLazyGetPostQuery } = servicesApi;

