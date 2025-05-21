export type FriendListResponse = {
  friend: Friend[];
};

export type Friend = {
  friend_id: string;
  friend_name: string;
  image_url: string;
  is_accepted: boolean;
};

export type DeleteFriendRequest = {
  friend_id: string;
};

export type AddFriendRequest = {
  friend_id: string;
};

export type AcceptFriendRequest = {
  friend_id: string;
};

export type UserListResponse = {
  user: User[];
};

export type User = {
  userId: string;
  userName: string;
  imageUrl: string;
};
