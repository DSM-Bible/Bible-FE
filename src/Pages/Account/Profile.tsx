import { css } from "@emotion/react";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Font } from "../../Styles/Font";
import { Color } from "../../Styles/Color";
import Profile from "../../Assets/img/SVG/DefaultProfileImg.svg";
import ProfileEditBtn from "../../Assets/img/SVG/profileEditBtn.svg";

export const ProfileSignup = () => {
  return (
    <>
      <div css={Container}>
        <div css={Content}>
          <Header FontText="회원가입" />
          <div css={ProfileEdit}>
            <img src={Profile} alt="" />
            <img className="Edit" src={ProfileEditBtn} alt="" />
          </div>
          <Input type="text" placeholder="닉네임을 입력하세요" />
        </div>
        <div css={BtnBox}>
          <div>
            <Button text="회원가입" />
          </div>
          <div css={MoveToLogin}>
            <Font text="이미 계정이 있으신가요?" />
            <button css={Btn}>로그인</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 35vh;
`;

const Content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ProfileEdit = css`
  position: relative;

  .Edit {
    position: absolute;
    left: 120px;
    top: 110px;
  }
`

const BtnBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MoveToLogin = css`
  display: flex;
  gap: 5px;
`;

const Btn = css`
  color: ${Color.mainColor};
  border: none;
  background-color: transparent;
  text-decoration: underline;
`;
