import { css } from "@emotion/react";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { Font } from "../../Styles/Font";
import { RoutineInput } from "../../Components/RoutineInput";
import { RoutineTime } from "../../Components/RoutineTime";
import { RoutinePeriod } from "../../Components/RoutinePeriod";
import { Button } from "../../Components/Button";

export const UpdateRoutine = () => {
  const InputProps = [
    {
      label: "시작 시간",
    },
    {
      label: "종료 시간",
    },
  ];
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
        />
        {InputProps.map((element, index) => (
          <RoutineTime key={index} label={element.label} />
        ))}
        <RoutinePeriod label="반복 주기" />
      </div>
      <div css={Btn}>
        <Button text="루틴 수정" />
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
