export type RoutineRequest = {
  title: string;
  startTime: string;
  endTime: string;
  repeatPeriod: RepeatPeriod;
};

export type RepeatPeriod =
  | "EVERY_DAY"
  | "EVERY_WEEKS"
  | "EVERY_OTHER_WEEKS"
  | "EVERY_THREE_WEEKS"
  | "EVERY_MONTH";

export type RoutineListResponse = {
  data: Data[];
};

export type Data = {
  routineId: string;
  title: string;
  startTime: string;
  endTime: string;
};

export type RoutineDetailResponse = {
  title: string;
  repeatPeriod: RepeatPeriod;
  startTime: string;
  endTime: string;
};

export type RoutineHistoryResponse = {
  title: string;
  startTime: string;
  endTime: string;
};
