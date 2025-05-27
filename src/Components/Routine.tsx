import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { useState } from "react";
import check from "../Assets/img/SVG/check.svg";
import { Data } from "../Apis/Routine/type";

interface RoutineProps {
  value: Data;
}

export const Routine = ({ value }: RoutineProps) => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck((prev) => !prev);
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

  return (
    <div css={Container}>
      <div css={HeaderWrapper}>
        <Font text={value.title} kind="headLine2" color="basicTextColor" />
        <div css={CheckBox(isCheck)} onClick={toggleCheck}>
          {isCheck && <img src={check} />}
        </div>
      </div>
      <div css={ContentWrapper}>
        <div css={InfoWrapper}>
          <div css={Info}>
            <Font text="목표 시간" kind="bodyText2" color="disableGray" />
            <Font
              text={getDurationText(value.startTime, value.endTime)}
              kind="bodyText1"
              color="basicTextColor"
            />
          </div>
          <div css={Info}>
            <Font text="루틴 기간" kind="bodyText2" color="disableGray" />
            <Font
              text={`${value.startTime}~${value.endTime}`}
              kind="bodyText1"
              color="basicTextColor"
            />
          </div>
        </div>
        <div css={StartButton}>
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
