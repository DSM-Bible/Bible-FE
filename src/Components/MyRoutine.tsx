import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const MyRoutine = () => {
  return (
    <div css={Container}>
      <Font
        text="12글자12글자루틴이름"
        kind="headLine2"
        color="basicTextColor"
      />
      <Font
        text="2025.03.24   12:00 ~ 12:52"
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
