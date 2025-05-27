import { css } from "@emotion/react";
import { Font } from "../../Styles/Font";
import { RoutineDateSelector } from "../../Components/RoutineDropdown";
import { Routine } from "../../Components/Routine";

export const RoutinePage = () => {
  return (
    <div css={Container}>
      <div css={TitleWrapper}>
        <Font text="루틴" kind="headLine1" color="basicTextColor" />
        <Font
          text="루틴을 등록하고, 관리해보세요"
          kind="bodyText1"
          color="disableGray"
        />
      </div>
      <RoutineDateSelector />
      <div css={Wrapper}>
        <Font
          text="총 N개의 루틴이 있습니다."
          kind="bodyText1"
          color="basicTextColor"
        />
        <div css={ButtonWrapper}>
          <Font text="추가" kind="bodyText1" color="basicTextColor" />
          <Font text="삭제" kind="bodyText1" color="defaultRed" />
        </div>
      </div>
      <Routine />
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = css`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 85px;
`;

const Wrapper = css`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const ButtonWrapper = css`
  display: flex;
  gap: 15px;
`;
