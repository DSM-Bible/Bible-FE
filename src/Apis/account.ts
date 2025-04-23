import {instance} from "./axios";

interface LoginRequest {
  id: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface SignupRequest {
  id: string;
  password: string;
  nickname: string; 
}

export const LoginApi = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>(`/account/login`, data);
};


export const SignupApi = async (data: FormData) => {
  return await instance.post(`/account/signup`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}