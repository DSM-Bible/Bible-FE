import { instance } from "../axios";
import {
  AcceptFriendRequest,
  AddFriendRequest,
  DeleteFriendRequest,
  FriendListResponse,
  UserListResponse,
} from "./type";

const router = "/friend";

export const FriendList = async () => {
  return await instance.get<FriendListResponse>(`${router}/list`);
};

export const DeleteFriend = async (data: DeleteFriendRequest) => {
  return await instance.delete(`${router}`, {
    data,
  });
};

export const AddFriend = async (data: AddFriendRequest) => {
  return await instance.post(`${router}`, data);
};

export const AcceptFriend = async (data: AcceptFriendRequest) => {
  return await instance.patch(`${router}/acceptance`, data);
};

export const UserList = async () => {
  return await instance.get<UserListResponse>(`${router}/users`);
};
