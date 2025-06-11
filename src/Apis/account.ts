import { instance } from "./axios";

interface LoginRequest {
  id: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export interface UserInfoResponse {
  userId: string;
  nickname: string;
  profile: string;
}

export const LoginApi = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>(`/account/login`, data);
};

export const SignupApi = async (data: FormData) => {
  return await instance.post(`/account/signup`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const UserUpdate = async (formData: FormData) => {
  return instance.patch("/account", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const UserInfo = async () => {
  return await instance.get<UserInfoResponse>(`/account`);
};
