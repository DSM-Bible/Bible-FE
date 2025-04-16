import axios from "axios";
import { Cookie } from "../Utils/cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    // const token = Cookie.get("token");
    //if (token)
    config.headers.Authorization =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3ZWpqMDUxMyIsImlhdCI6MTc0NDU0Nzk1NywiZXhwIjoxNzQ0NTY5NTU3fQ.sKNZlMCMcCRmzsu3NFrgJPDpq21H_LhUxkdtnKKPAmDPaIkGsaRclqqIQWOBSwJSjRW0EwiVMyWZvJJKRQFI4A";
    return config;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);
