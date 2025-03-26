import styled from "@emotion/styled";
import { Font } from "../Styles/Font";
import { useState } from "react";
import check from "../Assets/img/SVG/check.svg";

export const Todo = () => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    <Container>
      <CheckBox isCheck={isCheck} onClick={toggleCheck}>
        {isCheck && <Check src={check} />}
      </CheckBox>
      <Text>
        <Font text="디자인 완료하기" kind="bodyText1" color="basicTextColor" />
        <Font text="오늘(2025-03-19)" kind="bodyText3" color="basicTextColor" />
      </Text>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 300px;
  height: 30px;
  background-color: #f8f8f9;
  padding: 15px 20px;
  border-radius: 15px;
`;

export const CheckBox = styled.div<{ isCheck: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${({ isCheck }) => (isCheck ? "#5BDCA6" : "#CECECE")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Check = styled.img``;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
