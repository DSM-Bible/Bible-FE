import { css } from "@emotion/react";
import { Font } from "../Styles/Font";

interface PostProps {
  data: {
    id: string;
    title: string;
    content: string;
    writer: string;
    images: string;
  }
}

export const Post = ({data}: PostProps) => {
  return (
    <div css={Container}>
      <Font text={data.title} kind="bodyText1" color="basicTextColor" />
      <Font text={data.writer} kind="bodyText2" color="disableGray" />
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
