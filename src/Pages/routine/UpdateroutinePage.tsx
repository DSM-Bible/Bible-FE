import { css } from "@emotion/react";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { Font } from "../../Styles/Font";
import { RoutineInput } from "../../Components/RoutineInput";
import { RoutineTime } from "../../Components/RoutineTime";
import { RoutinePeriod } from "../../Components/RoutinePeriod";
import { Button } from "../../Components/Button";
import { useEffect, useState } from "react";
import { RoutineDetail, UpdateRoutine } from "../../Apis/Routine";
import { RoutineRequest } from "../../Apis/Routine/type";
import { useParams } from "react-router-dom";

export type RepeatPeriod =
  | "EVERY_DAY"
  | "EVERY_WEEKS"
  | "EVERY_OTHER_WEEKS"
  | "EVERY_THREE_WEEKS"
  | "EVERY_MONTH";

export const UpdateroutinePage = () => {
  const { routineId } = useParams();
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [repeatPeriod, setRepeatPeriod] = useState<RepeatPeriod | null>(null);

  const InputProps = [
    {
      label: "시작 시간",
      onChange: setStartTime,
      value: startTime,
    },
    {
      label: "종료 시간",
      onChange: setEndTime,
      value: endTime,
    },
  ];

  useEffect(() => {
    const fetchRoutine = async () => {
      if (!routineId) return;
      try {
        const response = await RoutineDetail(routineId);
        const data = response.data;

        setTitle(data.title);
        setStartTime(data.startTime);
        setEndTime(data.endTime);
        setRepeatPeriod(data.repeatPeriod);
      } catch (err) {
        console.error("루틴 데이터를 불러오는데 실패했습니다", err);
      }
    };

    fetchRoutine();
  }, [routineId]);

  const handleUpdate = async () => {
    if (!routineId || !repeatPeriod) {
      alert("데이터가 부족합니다.");
      return;
    }

    const data: RoutineRequest = {
      title,
      startTime,
      endTime,
      repeatPeriod,
    };

    try {
      await UpdateRoutine(routineId, data);
      alert("루틴이 성공적으로 수정되었습니다!");
    } catch (err) {
      console.error("루틴 수정 실패:", err);
      alert("루틴 수정에 실패했습니다.");
    }
  };

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" />
        <Font text="루틴 수정" kind="header" color="basicTextColor" />
      </div>
      <div css={InputWrapper}>
        <RoutineInput
          label="루틴 이름"
          placeholder="루틴 이름을 입력해 주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {InputProps.map((element, index) => (
          <RoutineTime
            key={index}
            label={element.label}
            value={element.value}
            onChange={(e) => element.onChange(e.target.value)}
          />
        ))}
        <RoutinePeriod
          label="반복 주기"
          value={repeatPeriod}
          onChange={(value) => setRepeatPeriod(value as RepeatPeriod)}
        />
      </div>
      <div css={Btn}>
        <Button text="루틴 수정" onClick={handleUpdate} />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 55px 31px;
`;

const Title = css`
  display: flex;
  gap: 35%;
  margin-bottom: 25px;
`;

const Back = css`
  width: 15px;
  height: 30px;
`;

const InputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 130px;
`;

const Btn = css`
  display: flex;
  align-self: center;
`;
