import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    generate: builder.mutation<string, string>({
      query: (background) => ({
        url: '/api/Talkathon/GenerateBackground',
        method: 'POST',
        body: background,
      }),
    }),
  }),
});
// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7097' }),
//   endpoints: (builder) => ({
//     generate: builder.mutation<string, string>({
//       query: (background) => ({
//         url: '/api/Talkathon/GenerateBackground',
//         method: 'POST',
//         body: background,
//       }),
//     }),
//   }),
// });

export const { useGenerateMutation } = apiSlice;
