import { css } from "@emotion/react";
import { Header } from "../../Components/Header";
import { Font } from "../../Styles/Font";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Color } from "../../Styles/Color";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignupApi } from "../../Apis/account";

export const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = () => {
    const formData = new FormData();
    const json = JSON.stringify({
      id,
      password,
      nickname,
    });

    formData.append(
      "body",
      new Blob([json], {
        type: "application/json",
      })
    );

    SignupApi(formData);
  };

  const ProfileSignup = () => {
    navigate("/Profile/Signup", { state: { id, password, nickname } });
  };
  return (
    <>
      <div css={Container}>
        <div css={Content}>
          <Header FontText="회원가입" />
          <div css={TitleBox}>
            <div css={RowTitle}>
              <Font text="갓생로그" kind="headLine1" color={"mainColor"} />
              <Font
                text="는 처음이시군요!"
                kind="headLine1"
                color={"defaultBlack"}
              />
            </div>
            <Font text="지금 바로 시작해봅시다!" kind="headLine1" />
            <Font
              text="아래 정보들을 기입하고 회원가입 버튼을 눌러주세요"
              kind="bodyText2"
              color={"disableGray"}
            />
          </div>
          <div css={InputBox}>
            <Input
              type="text"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
        </div>
        <div css={BtnBox}>
          <div onClick={ProfileSignup}>
            <Button text="다음" />
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
  gap: 26vh;
`;

const Content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

const TitleBox = css`
  display: flex;
  flex-direction: column;
`;

const RowTitle = css`
  display: flex;
`;

const InputBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

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
