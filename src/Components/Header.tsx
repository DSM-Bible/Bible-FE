import { css } from "@emotion/react";
import { Font } from "../Styles/Font";

interface HeaderProps {
  FontText: string;
}

export const Header = ({FontText}: HeaderProps) => {
  return (
    <>
      <div css={Container}>
        <Font text={FontText} kind="header" />
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: white;
`;