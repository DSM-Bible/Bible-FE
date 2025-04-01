import { css } from "@emotion/react";
import { Color } from "../Styles/Color";

export const PostTitle = () => {
  return (
    <>
      <input
        css={Title}
        type="text"
        placeholder="게시글의 제목을 입력해주세요"
      />
    </>
  );
};

const Title = css`
  width: 340px;
  height: 50px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding-left: 20px;

  &::placeholder {
    color: ${Color.disableGray};
  }

  &:focus::placeholder {
    color: ${Color.defaultBlack}
  }
`;
