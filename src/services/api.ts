import {
    createApi, fetchBaseQuery, retry, BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
});


const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log("API Fetch Result:", result);
    return result;
};


const baseQueryWithRetry = retry(customFetchBase, { maxRetries: 1 });

export const api = createApi({
    refetchOnReconnect: true,
    refetchOnFocus: true,
    reducerPath: "rootApi",
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({
        // getPost: build.query<any, void>({
        //     query: () => ({ url: "/blog-post" }),
        // }),
    }),
});




