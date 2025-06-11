import { instance } from "./axios";

interface AddProps {
  title: string;
  startTime: string;
  remind: number;
}

interface EditProps {
  title?: string;
  start_time: string;
  remind: number;
}

export interface ListData {
  data: {
    id: string;
    title: string;
    start_time: string;
    remine: number;
  };
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

export const GetList = async (cal_id: number) => {
  return await instance.get<ListData>(`/calender/details/$${cal_id}`);
};

export const EditSchedule = async (cal_id: number, data: EditProps) => {
  return await instance.patch(`/calender/details/${cal_id}`, data);
};

export const DeleteSchedule = async (calId: string) => {
  return await instance.delete(`/calender/${calId}`);
};
