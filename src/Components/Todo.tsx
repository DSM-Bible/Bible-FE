import { css } from "@emotion/react";
import check from "../Assets/img/SVG/check.svg";
import { useState } from "react";
import { Font } from "../Styles/Font";

type props = {
  title: string;
};

export const Todo = ({ title }: props) => {
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
        <Font text={title} kind="bodyText1" color="basicTextColor" />
        <Font text="2025-06-11" kind="bodyText3" color="basicTextColor" />
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
