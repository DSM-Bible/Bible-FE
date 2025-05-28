import { instance } from "./axios";

export const BoardApi = async (data: FormData) => {
  return instance.post(`/board`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const GetBoardList = async (selectType: 1 | 2, token: string) => {
  return instance.get(`/board/list/${selectType}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.data.body.list);
}