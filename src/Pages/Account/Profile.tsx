import { css } from "@emotion/react";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Font } from "../../Styles/Font";
import { Color } from "../../Styles/Color";
import Profile from "../../Assets/img/SVG/DefaultProfileImg.svg";
import ProfileEditBtn from "../../Assets/img/SVG/profileEditBtn.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignupApi } from "../../Apis/account";

export const ProfileSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, password } = location.state || {};
  const [nicknameInput, setNicknameInput] = useState("");
  const [profileImg, setProfileImg] = useState<File | null>(null);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfileImg(file);
    }
  };

  const handleProfileSignup = () => {
    const requestData = {
      id,
      password,
      nickname: nicknameInput,
    };

    const formData = new FormData();

    formData.append(
      "body",
      new Blob([JSON.stringify(requestData)], { type: "application/json" })
    );

    if (profileImg) {
      formData.append("file", profileImg);
    }

    SignupApi(formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("회원가입 오류:", error);
      });
  };

  return (
    <>
      <div css={Container}>
        <div css={Content}>
          <Header FontText="회원가입" />
          <div css={ProfileEdit}>
            <label htmlFor="profile-upload">
              <img
                src={profileImg ? URL.createObjectURL(profileImg) : Profile}
                alt="프로필 이미지"
              />
              <img className="Edit" src={ProfileEditBtn} alt="편집 버튼" />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
          </div>
          <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
          />
        </div>
        <div css={BtnBox}>
          <div onClick={handleProfileSignup}>
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
  label {
    cursor: pointer;
  }

  .Edit {
    position: absolute;
    left: 95px;
    top: 90px;
    width: 25px;
    height: 25px;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
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
