import { Error, UserData } from "@/types/contantType";
import { baseApi } from "./baseApi";

const USER = "/users";

export const daysApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (body) => ({
        url: `${USER}/${body.userId}`,
        method: "POST",
        body: body.data,
      }),
      transformResponse: (rawResult: UserData | Error) => {
        return rawResult;
      },
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: `${USER}/${body.userId}`,
        method: "POST",
        body: body.data,
      }),
      transformResponse: (rawResult: UserData | Error) => {
        return rawResult;
      },
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useUpdateUserMutation, useUpdateUserPasswordMutation } = daysApi;
