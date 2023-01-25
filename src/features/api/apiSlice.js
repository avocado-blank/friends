import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/userlist',
      providesTags: ['Post'],
    }),
    getSinglePost: builder.query({
      query: (id) => `/userlist/${id}`,
      // invalidatesTags: ['Post'],
      providesTags: ['Post'],
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: '/userlist',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/userlist/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `/userlist/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
    updateFriend: builder.mutation({
      query: (data) => ({
        url: `userlist/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetSinglePostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useUpdateFriendMutation,
} = apiSlice
