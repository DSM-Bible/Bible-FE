import { css } from "@emotion/react";
import { Font } from "../../Styles/Font";
import { RoutineDateSelector } from "../../Components/RoutineDropdown";
import { Routine } from "../../Components/Routine";
import { useState } from "react";
import { CheckModal } from "../../Components/CheckModal";

export const RoutinePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {};
  return (
    <>
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
      {showModal && (
        <CheckModal
          title="루틴 삭제"
          content1="선택된 모든 루틴을 삭제하시겠습니까?"
          content2="삭제후 복구는 불가능합니다"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
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
