import { Button } from "../../Components/Button";
import { Font } from "../../Styles/Font";
import StartIcon from "../../Assets/img/SVG/StartIcon.svg";
import { css } from "@emotion/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FinishRoutine } from "../../Apis/Routine";

export const StartPage = () => {
  const { routineId } = useParams();
  const location = useLocation();
  const { endTime } = location.state || {};
  const navigate = useNavigate();

  const finishRoutine = async () => {
    if (!routineId) return;
    try {
      await FinishRoutine(routineId);
      console.log("성공!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEnd = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const actualEndTime = `${hours}:${minutes}`;

    finishRoutine();
    navigate(`/finish/${routineId}`, {
      state: {
        endTime: endTime,
        actualEndTime: actualEndTime,
      },
    });
  };

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
          text={`목표는 ${endTime}까지에요!`}
          kind="headLine2"
          color="disableGray"
        />
      </div>
      <Button text="루틴 종료" onClick={handleEnd} />
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
