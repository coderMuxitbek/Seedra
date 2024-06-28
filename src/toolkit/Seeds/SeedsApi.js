import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SeedsApi = createApi({
    reducerPath: "SeedsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/seeds" }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => ""
        })
    })
});

export const { useGetAllDataQuery } = SeedsApi;