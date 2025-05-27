import { Button } from "../../Components/Button";
import { Font } from "../../Styles/Font";
import StartIcon from "../../Assets/img/SVG/StartIcon.svg";
import { css } from "@emotion/react";

export const StartPage = () => {
  return (
    <div css={Container}>
      <img src={StartIcon} css={Icon} />
      <div css={TextWrapper}>
        <Font
          text="지금은 루틴타임 중이에요"
          kind="headLine1"
          color="basicTextColor"
        />
        <Font
          text="목표는 00:00까지에요!"
          kind="headLine2"
          color="disableGray"
        />
      </div>
      <Button text="루틴 종료" />
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 45px;
`;

const Icon = css`
  width: 210px;
  height: 210px;
`;

const TextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 120px;
`;
