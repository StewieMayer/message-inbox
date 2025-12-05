import { baseApi } from "@app/baseApi";
import {
  IsLoggedInResponse,
  LoginPayload,
  LoginResponse,
  LogoutResponse,
} from "src/types/authTypes";
import { is } from "zod/v4/locales";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginPayload>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: build.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    isLoggedIn: build.query<IsLoggedInResponse, void>({
      query: () => ({
        url: "/is-logged-in",
        method: "GET",
      }),
      transformResponse: (response: IsLoggedInResponse) => ({
        loggedIn: response.loggedIn,
      }),
    }),
    refreshToken: build.mutation<LoginResponse, void>({
      query: () => ({
        url: "/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useIsLoggedInQuery,
  useRefreshTokenMutation,
} = authApi;
