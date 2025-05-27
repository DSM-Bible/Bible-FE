import { css } from "@emotion/react";
import RoutineTimeImg from "../Assets/img/SVG/RoutineTime.svg";
import { Color } from "../Styles/Color";
import { useRef } from "react";
import { Font } from "../Styles/Font";

interface RoutineTimeProps {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RoutineTime = ({ label, value, onChange }: RoutineTimeProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <>
      <div css={Container}>
        <Font text={label} kind="bodyText1" color="defaultBlack" />
        <div css={InputBox}>
          <img css={Img} src={RoutineTimeImg} alt="" />
          <input
            css={Input}
            type="time"
            ref={inputRef}
            onClick={handleClick}
            value={value}
            step="300"
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  gap: 5px;
`;

const InputBox = css`
  display: flex;
  align-items: center;
  position: relative;
`;

const Img = css`
  position: absolute;
  left: 10px;
  cursor: pointer;
`;

const Input = css`
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  height: 50px;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding-left: 50px;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    display: none;
    appearance: none;
  }
`;
