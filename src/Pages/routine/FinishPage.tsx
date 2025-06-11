import { Button } from "../../Components/Button";
import { Font } from "../../Styles/Font";
import FinishIcon from "../../Assets/img/SVG/FinishIcon.svg";
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

export const FinishPage = () => {
  const location = useLocation();
  const { endTime, actualEndTime } = location.state || {};
  const navigate = useNavigate();

  return (
    <div css={Container}>
      <img src={FinishIcon} css={Icon} />
      <div css={TextWrapper}>
        <Font text="수고하셨어요!" kind="headLine1" color="basicTextColor" />
        <Font
          text={`목표는 ${endTime}까지였어요`}
          kind="headLine2"
          color="disableGray"
        />
        <Font
          text={`실제 종료시간은 ${actualEndTime || "00:00"}이에요`}
          kind="headLine2"
          color="disableGray"
        />
      </div>
      <Button text="확인" onClick={() => navigate("/routine")} />
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
  margin-bottom: 90px;
`;
