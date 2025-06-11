import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { RoutineListResponse } from "../Apis/Routine/type";
import { useNavigate } from "react-router-dom";
import { StartRoutine } from "../Apis/Routine";

type Routine = RoutineListResponse["data"][0];

interface Props {
  routine?: Routine;
}
export const TodayRoutine = ({ routine }: Props) => {
  const navigate = useNavigate();

  const startRoutine = async () => {
    if (!routine) return;
    try {
      await StartRoutine(routine?.routineId);
      console.log("성공!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleStart = () => {
    startRoutine();
    navigate(`/start/${routine?.routineId}`, {
      state: { endTime: routine?.endTime },
    });
  };
  if (!routine) return null;

  return (
    <div css={Container}>
      <div css={HeaderWrapper}>
        <Font text={routine.title} kind="headLine2" color="basicTextColor" />
      </div>
      <div css={ContentWrapper}>
        <div css={InfoWrapper}>
          <div css={Info}>
            <Font
              text={`${routine.startTime} ~ ${routine.endTime}`}
              kind="bodyText2"
              color="disableGray"
            />
          </div>
        </div>
        <div css={StartButton} onClick={handleStart}>
          <Font text="시작" kind="bodyText1" color="basicTextColor" />
        </div>
      </div>
    </div>
  );
};

const Container = css`
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

const HeaderWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
`;

const InfoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StartButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 30px;
  background-color: ${Color.defaultWhite};
  border-radius: 10px;
`;
