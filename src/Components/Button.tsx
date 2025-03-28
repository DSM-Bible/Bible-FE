import styled from "@emotion/styled";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

interface ButtonPropType {
  text: string;
}

export const Button = ({ text }: ButtonPropType) => {
  return (
    <Container>
      <Font text={text} kind="btnText" color="defaultWhite" />
    </Container>
  );
};

export const Container = styled.div`
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
