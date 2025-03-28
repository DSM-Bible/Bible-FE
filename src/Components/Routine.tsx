import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { useState } from "react";
import check from "../Assets/img/SVG/check.svg";

export const Routine = () => {
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck((prev) => !prev);
  };
  return (
    <div css={container}>
      <div css={headerWrapper}>
        <Font text="루틴이름꺄를ㄺ" kind="headLine2" color="basicTextColor" />
        <div css={checkBox(isCheck)} onClick={toggleCheck}>
          {isCheck && <img src={check} />}
        </div>
      </div>
      <div css={contentWrapper}>
        <div css={infoWrapper}>
          <div css={info}>
            <Font text="목표 시간" kind="bodyText2" color="disableGray" />
            <Font text="30분" kind="bodyText1" color="basicTextColor" />
          </div>
          <div css={info}>
            <Font text="루틴 기간" kind="bodyText2" color="disableGray" />
            <Font
              text="12:00 ~ 13:30"
              kind="bodyText1"
              color="basicTextColor"
            />
          </div>
        </div>
        <div css={startButton}>
          <Font text="수정" kind="bodyText1" color="basicTextColor" />
        </div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 290px;
  height: 117px;
  border-radius: 15px;
  background-color: #f8f8f9;
  padding: 20px 24px;
`;

const headerWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const checkBox = (isCheck: boolean) => css`
  width: 30px;
  height: 30px;
  background-color: ${isCheck ? "#5BDCA6" : "#CECECE"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const contentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
`;

const infoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const info = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const startButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 30px;
  background-color: ${Color.defaultWhite};
  border-radius: 10px;
`;
