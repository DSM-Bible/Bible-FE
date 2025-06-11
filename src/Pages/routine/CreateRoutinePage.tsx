import { css } from "@emotion/react";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { Font } from "../../Styles/Font";
import { RoutineInput } from "../../Components/RoutineInput";
import { RoutineTime } from "../../Components/RoutineTime";
import { RoutinePeriod } from "../../Components/RoutinePeriod";
import { Button } from "../../Components/Button";
import { CreateRoutine } from "../../Apis/Routine";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type RepeatPeriod =
  | "EVERY_DAY"
  | "EVERY_WEEKS"
  | "EVERY_OTHER_WEEKS"
  | "EVERY_THREE_WEEKS"
  | "EVERY_MONTH";

export const CreateRoutinePage = () => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [repeatPeriod, setRepeatPeriod] = useState<RepeatPeriod | null>(null);
  const navigate = useNavigate();

  const handleCreateRoutine = async () => {
    if (!repeatPeriod) {
      console.error("반복 주기를 선택해 주세요.");
      return;
    }
    try {
      await CreateRoutine({
        title: title,
        startTime: startTime,
        endTime: endTime,
        repeatPeriod: repeatPeriod,
      });
      console.log("루틴이 성공적으로 등록되었습니다.");
      navigate("/routine");
    } catch {
      console.error("에러에러에러에러에러엘얼ㄹ");
    }
  };
  const InputProps = [
    {
      label: "시작 시간",
      onChange: setStartTime,
    },
    {
      label: "종료 시간",
      onChange: setEndTime,
    },
  ];
  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" onClick={() => navigate(-1)} />
        <Font text="루틴 생성" kind="header" color="basicTextColor" />
      </div>
      <div css={InputWrapper}>
        <RoutineInput
          label="루틴 이름"
          placeholder="루틴 이름을 입력해 주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        {InputProps.map((element, index) => (
          <RoutineTime
            key={index}
            label={element.label}
            onChange={(e) => element.onChange(e.target.value)}
          />
        ))}
        <RoutinePeriod
          label="반복 주기"
          onChange={(value) => setRepeatPeriod(value as RepeatPeriod)}
        />
      </div>
      <div css={Btn}>
        <Button text="루틴 생성" onClick={handleCreateRoutine} />
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
