import { Header } from "../../Components/Header";
import PostAddImg from "../../Assets/img/SVG/PostAddImg.svg";
import { Input } from "../../Components/Input";
import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Navbar } from "../../Components/Navbar";
import { Color } from "../../Styles/Color";

export const BoardEdit = () => {
  return (
    <>
      <div css={Container}>
        <Header FontText="게시글 수정" />
        <div css={ContentBox}>
          <div css={ImgBox}>
            <label htmlFor="">사진</label>
            <img src={PostAddImg} alt="" />
          </div>
          <Input type={"text"} placeholder="게시글 제목을 입력해주세요" />
          <textarea
            css={TextArea}
            name=""
            id=""
            placeholder="내용을 입력해주세요"
          ></textarea>
          <Button text="게시글 저장" />
          <Navbar />
        </div>
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ImgBox = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const TextArea = css`
  width: 320px;
  height: 210px;
  resize: none;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding: 16px 20px;
`;
