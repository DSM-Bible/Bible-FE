import { css } from "@emotion/react";
import { Font } from "../Styles/Font";

export const Post = () => {
  return (
    <div css={Container}>
      <Font text="제목제목" kind="bodyText1" color="basicTextColor" />
      <Font text="세쿠시걸 · 2025.03.31" kind="bodyText2" color="disableGray" />
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 328px;
  height: 73px;
  padding-left: 20px;
  border-top: 1px solid #929292;
`;
