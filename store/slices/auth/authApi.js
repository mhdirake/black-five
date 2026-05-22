import { userInformation } from "./api";
import http from "@/config/http";

export const authApi = {
  userInformation: async () => await http.get(userInformation),
};

export default authApi;
