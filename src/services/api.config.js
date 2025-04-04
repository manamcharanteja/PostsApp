/* eslint-disable no-return-assign */
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConfig } from "../config/app-config";

// initialize an empty api service that we'll inject endpoints into later as needed
const IGNORE_ERROR_FOR_KEYS = ["otp_expired"];
const dynamicBaseQuery = async (args, WebApi, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("appCode", "STR008");
      return headers;
    },
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await dynamicBaseQuery(args, api, extraOptions);
  console.log("🚀 ~ baseQueryWithReauth ~ result:", result);

  // Check if the endpoint wants to ignore global error handling
  const ignoreGlobalErrors = extraOptions?.ignoreGlobalErrors || false;

  if (result.error && result.error?.status === "FETCH_ERROR") {
    global.toast.show("Something went wrong. Please try again!", {
      type: "danger",
    });
    return result;
  }
  if (result.error && result.error.status === 401) {
    // try to get a new token
  } else if (
    result.error &&
    result.error.status === 400 &&
    !IGNORE_ERROR_FOR_KEYS.includes(result.error?.data?.errorKey) &&
    !ignoreGlobalErrors
  ) {
    // Show global toast only if not ignored
    global.toast.show(
      result.error.data?.title ||
        result.error.data?.message ||
        "Something went wrong.",
      { type: "danger" }
    );
  } else if (
    result.error &&
    result.error.status === 500 &&
    !ignoreGlobalErrors
  ) {
    // try to get a new token
    global.toast.show(
      result.error.data?.title ||
        result.error.data?.message ||
        "Something went wrong.",
      { type: "danger" }
    );
  }
  return result;
};

export const backendApi = createApi({
  reducerPath: "backend",
  overrideExisting: true,
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === REHYDRATE) {
  //     return action.payload[reducerPath];
  //   }
  // },
  baseQuery: baseQueryWithReauth,
  // refetchOnMountOrArgChange: 30,
  tagTypes: ["store_details"],
  endpoints: () => ({}),
});
