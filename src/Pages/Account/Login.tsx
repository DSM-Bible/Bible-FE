import { css } from "@emotion/react";
import { Header } from "../../Components/Header";
import { Font } from "../../Styles/Font";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Color } from "../../Styles/Color";

export const Login = () => {
  return (
    <>
      <div css={Container}>
        <Header FontText="로그인" />
        <div css={TitleBox}>
          <Font
            text="일상의 사소하고 작은 변화"
            kind="headLine1"
            color={"defaultBlack"}
          />
          <div>
            <Font text="갓생로그" kind="headLine1" color={"mainColor"} />
            <Font
              text="와 함께 시작해보세요 :D"
              kind="headLine1"
              color={"defaultBlack"}
            />
          </div>
          <Font text="아이디와 비밀번호를 통해 로그인을 진행해주세요" kind="bodyText2" color={"disableGray"} />
        </div>
        <div css={InputBox}>
          <Input type="text" placeholder="아이디를 입력해주세요" />
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div css={BtnBox}>
          <Button text="로그인" />
          <div>
            <Font text="계정이 없으신가요?" />
            <button>회원가입</button>
          </div>
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
  width: 100vw;
  height: 100vh;
  gap: 30px;
`;

const TitleBox = css`
  > div {
    display: flex;
  }
`

const InputBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const BtnBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 320px;

  > div {
    display: flex;
    justify-content: center;
    gap: 5px;

    > button {
      font-size: 15px; 
      color: ${Color.mainColor};
      background-color: transparent;
      border: none;
      text-decoration: underline;
    }
  }
`