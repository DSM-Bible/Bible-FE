import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { useState } from "react";
import check from "../Assets/img/SVG/check.svg";
import { Data } from "../Apis/Routine/type";
import { useNavigate } from "react-router-dom";
import { StartRoutine } from "../Apis/Routine";

interface RoutineProps {
  value: Data;
  onSelect: (id: string, isChecked: boolean) => void;
}

export const Routine = ({ value, onSelect }: RoutineProps) => {
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  const toggleCheck = () => {
    const newCheck = !isCheck;
    setIsCheck(newCheck);
    onSelect(value.routineId, newCheck);
  };

  const getDurationText = (start: string, end: string): string => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    const startTotal = startHour * 60 + startMinute;
    const endTotal = endHour * 60 + endMinute;

    const diff = endTotal - startTotal;

    if (diff <= 0) return "0분";

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    if (hours > 0) {
      return `${hours}시간 ${minutes > 0 ? `${minutes}분` : ""}`.trim();
    }
    return `${minutes}분`;
  };

  const startRoutine = async () => {
    try {
      await StartRoutine(value.routineId);
      console.log("성공!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = () => {
    navigate(`/UpdateRoutine/${value.routineId}`);
  };

  const handleStart = () => {
    startRoutine();
    navigate(`/start/${value.routineId}`, {
      state: { endTime: value.endTime },
    });
  };

  return (
    <div css={Container}>
      <div css={HeaderWrapper}>
        <Font
          text={value.title}
          kind="headLine2"
          color="basicTextColor"
          onClick={handleStart}
        />
        <div css={CheckBox(isCheck)} onClick={toggleCheck}>
          {isCheck && <img src={check} />}
        </div>
      </div>
      <div css={ContentWrapper}>
        <div css={InfoWrapper}>
          <div css={Info} onClick={handleStart}>
            <Font text="목표 시간" kind="bodyText2" color="disableGray" />
            <Font
              text={getDurationText(value.startTime, value.endTime)}
              kind="bodyText1"
              color="basicTextColor"
            />
          </div>
          <div css={Info} onClick={handleStart}>
            <Font text="루틴 기간" kind="bodyText2" color="disableGray" />
            <Font
              text={`${value.startTime}~${value.endTime}`}
              kind="bodyText1"
              color="basicTextColor"
            />
          </div>
        </div>
        <div css={StartButton} onClick={handleUpdate}>
          <Font text="수정" kind="bodyText1" color="basicTextColor" />
        </div>
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 290px;
  height: 117px;
  border-radius: 15px;
  background-color: #f8f8f9;
  padding: 20px 24px;
`;

const HeaderWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const CheckBox = (isCheck: boolean) => css`
  width: 30px;
  height: 30px;
  background-color: ${isCheck ? "#5BDCA6" : "#CECECE"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ContentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
`;

const InfoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StartButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 30px;
  background-color: ${Color.defaultWhite};
  border-radius: 10px;
`;
