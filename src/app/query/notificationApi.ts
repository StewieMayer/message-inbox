import { Notification} from "../../types/inboxTypes";
import { baseApi } from "../baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<Array<Notification>, void>({
      query: () => ({
        url: "notifications",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
