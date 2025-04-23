import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

interface ButtonPropType {
  text: string;
  onClick?:() => void;
}

export const Button = ({ text, onClick }: ButtonPropType) => {
  return (
    <div css={Container} onClick={onClick}>
      <Font text={text} kind="btnText" color="defaultWhite" />
    </div>
  );
};

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 60px;
  background-color: ${Color.mainColor};
  border-radius: 15px;
  cursor: pointer;
  user-select: none;
`;
