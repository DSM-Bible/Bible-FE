import { instance } from "../axios";
import {
  RoutineListRequest,
  RoutineListResponse,
  RoutineRequest,
  RoutineDetailResponse,
  RoutineHistoryResponse,
} from "./type";

const router = "/routine";

export const CreateRoutine = async (data: RoutineRequest) => {
  return await instance.post(`${router}`, data);
};

export const UpdateRoutine = async (
  routineId: string,
  data: RoutineRequest
) => {
  return await instance.patch(`${router}/${routineId}`, data);
};

export const DeleteRoutine = async (routineId: string) => {
  return await instance.delete(`${router}/${routineId}`);
};

export const RoutineList = async (data: RoutineListRequest) => {
  return await instance.get<RoutineListResponse>(`${router}/list`, { data });
};

export const RoutineDetail = async (routineId: string) => {
  return await instance.get<RoutineDetailResponse>(
    `${router}/detail/${routineId}`
  );
};

export const StartRoutine = async (routineId: string) => {
  return await instance.post(`${router}/start/${routineId}`);
};

export const FinishRoutine = async (routineId: string) => {
  return await instance.patch(`${router}/stop/${routineId}`);
};

export const RoutineHistory = async () => {
  return await instance.get<RoutineHistoryResponse>(`${router}/list/history`);
};
