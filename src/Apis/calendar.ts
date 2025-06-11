import { instance } from "./axios";

interface AddProps {
  title: string;
  startTime: string;
  remind: number;
}

export interface EditProps {
  title?: string;
  startTime: string;
  remind: number;
}

export interface ListData {
  title: string;
  startTime: string;
  remind: number;
}

export interface ScheduleItem {
  id: string;
  title: string;
  start_time: string;
  remind: number;
}

export interface ScheduleListResponse {
  data: ScheduleItem[];
}

export const Add = async (data: AddProps) => {
  return await instance.post("/calender", data);
};

export const GetAllSchedules = async (date: string) => {
  return await instance.get<ScheduleListResponse>(`/calender/list/${date}`);
};

export const GetList = async (cal_id: string) => {
  return await instance.get<ListData>(`/calender/detail/${cal_id}`);
};

export const EditSchedule = async (cal_id: string, data: EditProps) => {
  return await instance.patch(`/calender/${cal_id}`, data);
};

export const DeleteSchedule = async (calId: string) => {
  return await instance.delete(`/calender/${calId}`);
};
