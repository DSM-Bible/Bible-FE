import { css } from "@emotion/react";
import check from "../Assets/img/SVG/check.svg";
import { useState } from "react";
import { Font } from "../Styles/Font";

export const Todo = () => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    <div css={Container}>
      <div css={CheckBox(isCheck)} onClick={toggleCheck}>
        {isCheck && <img src={check} />}
      </div>
      <div css={Text}>
        <Font text="디자인 완료하기" kind="bodyText1" color="basicTextColor" />
        <Font text="오늘(2025-03-19)" kind="bodyText3" color="basicTextColor" />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 300px;
  height: 30px;
  background-color: #f8f8f9;
  padding: 15px 20px;
  border-radius: 15px;
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

const Text = css`
  display: flex;
  flex-direction: column;
`;
