import { backendApi } from "./api.config";
import { API_ENDPOINTS } from "./endpoint.const";

export const accountApi = backendApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: API_ENDPOINTS.GET_POSTS,
        method: "GET",
      }),
    }),
    viewPostComments: builder.query({
      query: ({ postId }) => ({
        url: `${API_ENDPOINTS.VIEW_POST}${postId}/comments`,
        method: "GET",
      }),
    }),
    updatePostComment: builder.mutation({
      query: ({ commentId, body }) => ({
        url: `${API_ENDPOINTS.COMMENT_POST}${commentId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useViewPostCommentsQuery,
  useUpdatePostCommentMutation,
} = accountApi;
