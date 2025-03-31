import { css } from "@emotion/react";
import { Color } from "../Styles/Color";

export const ContentInput = () => {
  return <textarea css={input} placeholder="내용을 입력해주세요"></textarea>;
};

const input = css`
  width: 300px;
  height: 198px;
  padding: 16px 20px;
  background-color: ${Color.defaultWhite};
  resize: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 15px;
  &:focus {
    border: 1px solid ${Color.mainColor};
    outline: none;
  }
`;
