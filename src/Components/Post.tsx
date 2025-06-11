import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Data } from "../Apis/board";

interface PostProps {
  list: Data;
  onClick?: () => void;
}

export const Post = ({list, onClick}: PostProps) => {
  return (
    <div css={Container} onClick={onClick}>
      <Font text={list.title} kind="bodyText1" color="basicTextColor" />
      <Font text={list.userName} kind="bodyText2" color="disableGray" />
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
