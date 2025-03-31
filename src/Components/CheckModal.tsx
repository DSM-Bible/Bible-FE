import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const CheckModal = () => {
  return (
    <div css={Container}>
      <div css={TextWrapper}>
        <Font text="친구 삭제" kind="headLine1" color="basicTextColor" />
        <div css={Content}>
          <Font
            text="8자딱맞춘닉넴님"
            kind="modalText"
            color="basicTextColor"
          />
          <Font
            text="위 친구를 친구삭제 하시겠습니까?"
            kind="modalText"
            color="basicTextColor"
          />
        </div>
      </div>
      <div css={ButtonWrapper}>
        <div css={CancelButton}>
          <Font text="취소" kind="bodyText1" color="defaultRed" />
        </div>
        <div css={ConfirmButton}>
          <Font text="확인" kind="bodyText1" color="defaultBlue" />
        </div>
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 340px;
  height: 200px;
  background-color: ${Color.defaultWhite};
  border-radius: 20px;
  border: 1px solid;
`;

const TextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 38px;
`;

const Content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = css`
  display: flex;
`;

const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 44px;
  border-top: 1px solid #a7a7a7;
  cursor: pointer;
`;

const CancelButton = css`
  ${Button}
  border-right: 1px solid #a7a7a7;
  color: ${Color.defaultRed};
`;

const ConfirmButton = css`
  ${Button}
  color: ${Color.defaultBlue};
`;
