import { css } from "@emotion/react";
import { Font } from "../Styles/Font";

export const Header = () => {
  return (
    <>
      <div css={Container}>
        <Font text="Page Name" kind="header" />
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 402px;
  height: 70px;
`;