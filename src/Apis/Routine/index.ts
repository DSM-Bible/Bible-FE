import { instance } from "../axios";
import {
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

export const DeleteRoutine = async (routineIds: string[]) => {
  await Promise.all(
    routineIds.map((id) => instance.delete(`${router}/${id}`))
  );
};

export const RoutineList = async (date: string) => {
  return await instance.get<RoutineListResponse>(`${router}/list/${date}`);
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
