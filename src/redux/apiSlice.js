import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://auth-backend-7w3u.onrender.com",
        endpoints:(builder) => ({
            login:builder.mutation({
                query:(credentials) => ({
                    url:"/login",
                    method:"POST",
                    body:credentials
                })
            }),
            signup:builder.mutation({
                query:(credentials) => ({
                    url:"/signup",
                    method:"POST",
                    body:credentials
                })
            })
        })
    })
})