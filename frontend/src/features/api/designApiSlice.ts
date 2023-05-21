import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DesignFormData } from '../../vite-env';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7097' }),
  endpoints: (builder) => ({
    generate: builder.mutation<ResponseType, DesignFormData>({
      query: (background) => ({
        url: '/api/Talkathon/GenerateBackground',
        method: 'POST',
        body: background,
      }),
    }),

    answerTo: builder.mutation<ResponseType, DesignFormData>({
      query: (background) => ({
        url: '/api/Talkathon/AnswerTo',
        method: 'POST',
        body: background,
      }),
    }),
  }),
});

export const { useGenerateMutation } = apiSlice;
