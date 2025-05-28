import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { RoutineHistoryType } from "../Apis/Routine/type";

type MyroutineProps = {
  value: RoutineHistoryType;
};

export const MyRoutine = ({ value }: MyroutineProps) => {
  const [startDate, startTime] = value.startTime.split("T");
  const [, endTime] = value.endTime.split("T");

  return (
    <div css={Container}>
      <Font text={value.title} kind="headLine2" color="basicTextColor" />
      <Font
        text={`${startDate.replace(/-/g, ".")}   ${startTime.slice(
          0,
          5
        )} ~ ${endTime.slice(0, 5)}`}
        kind="bodyText1"
        color="disableGray"
      />
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 310px;
  height: 67px;
  padding-left: 30px;
  border-bottom: 1px solid ${Color.disableGray};
`;
