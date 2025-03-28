import styled from "@emotion/styled";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const Routine = () => {
  return (
    <Container>
      <Font text="루틴이름꺄를ㄺ" kind="headLine2" color="basicTextColor" />
      <Wrapper>
        <Font text="12:00 ~ 13:30" kind="bodyText1" color="basicTextColor" />
        <StartButton>
          <Font text="시작" kind="bodyText1" color="basicTextColor" />
        </StartButton>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 267px;
  height: 117px;
  border-radius: 15px;
  background-color: #f8f8f9;
  padding: 0px 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 30px;
  background-color: ${Color.defaultWhite};
  border-radius: 10px;
`;
