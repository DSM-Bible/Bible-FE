import { instance } from "./axios";

export interface Data {
  id: string;
  title: string;
  content: string;
  userName: string;
  images: string;
}

export interface BoardListResponse {
  data: {
    list: Data[];
  }
}

export interface BoardViewResponse {
  data: {
    id: string;
    title: string;
    content: string;
    userId: string;
    userName: string;
    fileUrl: string;
    likeCount: number;
    isLiked: boolean;
  }
    
}

export const BoardApi = async (data: FormData) => {
  return instance.post(`/board`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const GetBoardList = async (selectType: 1 | 2) => {
  return await instance.get<BoardListResponse>(`/board/list`, {
    params: {selectType}
  });
};

export const GetBoardView = async (id: string) => {
  return await instance.get<BoardViewResponse>(`/board/${id}`)
}

export const PostBoardLike = async (id: string) => {
  return instance.post(`/board/${id}/like`);
};

export const DeleteBoardLike = async (id: string) => {
  return instance.delete(`/board/${id}/like`)
}