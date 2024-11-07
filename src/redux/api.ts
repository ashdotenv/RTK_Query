import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const POSTS = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPosts: builder.query<string[], string>({ query: () => "posts" }),
    newPost: builder.mutation<Post, Post>({
      query: (post: Post) => ({
        url: "posts",
        body: post,
        method: "POST",
      }),
    }),
  }),
});
export const { useGetPostsQuery, useNewPostMutation } = POSTS;
