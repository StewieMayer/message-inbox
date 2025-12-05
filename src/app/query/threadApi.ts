import { ResponseThreads, Thread, ThreadsParams } from "../../types/inboxTypes";
import { baseApi } from "../baseApi";

export const threadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getThreads: builder.query<Array<Thread>, ThreadsParams>({
      query: (params) => ({
        url: "threads",
        params,
        method: "GET",
      }),
      transformResponse: (response: { data: Array<Thread> }) => response.data,
    }),
    getThreadById: builder.query<Thread, string>({
      query: (threadId) => ({
        url: `threads/${threadId}`,
        method: "GET",
      }),
      transformResponse: (response: { data: Thread }) => response.data,
    }),
    setThreat: builder.mutation<any, Omit<Thread, "id">>({
      query: ({ messages, sender, title }) => ({
        url: "threads/",
        method: "POST",
        body: { messages, sender, title },
      }),
    }),
    respondToThread: builder.mutation<any, ResponseThreads>({
      query: ({ threadId, message }) => ({
        url: `threads/${threadId}/messages`,
        method: "POST",
        body: message,
      }),
    }),
  }),
});

export const {
  useGetThreadsQuery,
  useGetThreadByIdQuery,
  useSetThreatMutation,
  useRespondToThreadMutation,
} = threadApi;
