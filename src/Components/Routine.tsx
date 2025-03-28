import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const Routine = () => {
  return (
    <div css={containerStyle}>
      <Font text="루틴이름꺄를ㄺ" kind="headLine2" color="basicTextColor" />
      <div css={wrapperStyle}>
        <Font text="12:00 ~ 13:30" kind="bodyText1" color="basicTextColor" />
        <div css={startButtonStyle}>
          <Font text="시작" kind="bodyText1" color="basicTextColor" />
        </div>
      </div>
    </div>
  );
};

const containerStyle = css`
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

const wrapperStyle = css`
  display: flex;
  justify-content: space-between;
`;

const startButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 30px;
  background-color: ${Color.defaultWhite};
  border-radius: 10px;
`;
