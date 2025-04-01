import { css } from "@emotion/react";
import RoutineNameImg from "../Assets/img/SVG/RoutineName.svg"
import { Color } from "../Styles/Color";
import { Font } from "../Styles/Font";

interface RoutineInputProps {
  type?: "text" | "time"
  placeholder?: string
}

export const RoutineInput = ({type, placeholder}: RoutineInputProps) => {
  return (
    <div css={Container}>
      <Font text="루틴 이름" kind="bodyText1" color="defaultBlack" />
      <div css={InputBox}>
        <img css={Img} src={RoutineNameImg} alt="" />
        <input css={Input} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const InputBox = css`
  display: flex;
  align-items: center;
`;

const Img = css`
  position: absolute;
  padding-left: 10px;
`;

const Input = css`
  font-size: 15px;
  font-weight: 500;
  width: 340px;
  height: 50px;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding-left: 50px;
`