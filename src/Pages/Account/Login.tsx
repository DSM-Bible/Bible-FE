import { css } from "@emotion/react";
import { Header } from "../../Components/Header";
import { Font } from "../../Styles/Font";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Color } from "../../Styles/Color";
import { useState } from "react";
import { LoginApi } from "../../Apis/account";
import { Cookie } from "../../Utils/cookie";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (pwd: string) => {
    const isValidLength = /^.{8,15}$/.test(pwd);
    const hasLetters = /[A-Za-z]/.test(pwd);
    const hasNumbers = /[0-9]/.test(pwd);

    return isValidLength && hasLetters && hasNumbers;
  };

  const handleLogin = () => {
    if (!validatePassword(password)) {
      setPasswordError(
        "비밀번호는 8~15자이며, 영문자, 숫자, 특수문자를 포함해야 합니다."
      );
      return;
    } else {
      setPasswordError("");
    }

    LoginApi({
      id: userId,
      password: password,
    })
      .then((res) => {
        Cookie.set("token", res.data.token);
        navigate("/main");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const MoveToSignup = () => {
    navigate("/signup");
  };

  return (
    <div css={Container}>
      <Header FontText="로그인" />
      <div css={TitleBox}>
        <Font
          text="일상의 사소하고 작은 변화"
          kind="headLine1"
          color="defaultBlack"
        />
        <div>
          <Font text="갓생로그" kind="headLine1" color="mainColor" />
          <Font
            text="와 함께 시작해보세요 :D"
            kind="headLine1"
            color="defaultBlack"
          />
        </div>
        <Font
          text="아이디와 비밀번호를 통해 로그인을 진행해주세요"
          kind="bodyText2"
          color="disableGray"
        />
      </div>
      <div css={InputBox}>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div css={ErrorText}>{passwordError}</div>}
      </div>
      <div css={BtnBox}>
        <Button text="로그인" onClick={handleLogin} />
        <div>
          <Font text="계정이 없으신가요?" />
          <button onClick={MoveToSignup}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

const ErrorText = css`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;

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
`;

const InputBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

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
`;
