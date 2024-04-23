import {
    createApi, fetchBaseQuery, retry, BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://ardi-test-back-1c8840b2f462.herokuapp.com",
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
    endpoints: () => ({}),
});




