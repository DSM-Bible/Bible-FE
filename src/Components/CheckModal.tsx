import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

interface CheckModalPropsType {
  title: string;
  content1?: string;
  content2?: string;
  placeholder?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const CheckModal = ({
  title,
  content1,
  content2,
  placeholder,
  onCancel,
  onConfirm,
}: CheckModalPropsType) => {
  return (
    <div css={Backdrop}>
      <div css={Container}>
        <div css={TextWrapper}>
          <Font text={title} kind="headLine1" color="basicTextColor" />
          <div css={Content}>
            {[content1, content2].map(
              (content, index) =>
                content && (
                  <Font
                    key={index}
                    text={content}
                    kind="modalText"
                    color="basicTextColor"
                  />
                )
            )}
            {!content1 && !content2 && (
              <input css={Input} type="text" placeholder={placeholder} />
            )}
          </div>
        </div>
        <div css={ButtonWrapper}>
          <div css={CancelButton} onClick={onCancel}>
            <Font text="취소" kind="bodyText1" color="defaultRed" />
          </div>
          <div css={ConfirmButton} onClick={onConfirm}>
            <Font text="확인" kind="bodyText1" color="defaultBlue" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 340px;
  height: 200px;
  background-color: ${Color.defaultWhite};
  border-radius: 20px;
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

const Input = css`
  width: 256px;
  height: 8px;
  border: 1px solid #a7a7a7;
  border-radius: 8px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${Color.mainColor};
    outline: none;
  }
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
`;

const ConfirmButton = css`
  ${Button}
`;
