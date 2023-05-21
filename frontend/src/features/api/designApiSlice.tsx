import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DesignFormData } from '../../vite-env';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7097' }),
  endpoints: (builder) => ({
    generate: builder.mutation<string, string>({
      query: (background) => ({
        url: '/api/Talkathon/GenerateBackground',
        method: 'GET',
        body: background,
      }),
    }),
  }),
});

export const { useGenerateMutation } = apiSlice;
