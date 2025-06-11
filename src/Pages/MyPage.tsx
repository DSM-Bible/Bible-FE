import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import editCheck from "../Assets/img/SVG/editCheck.svg";
import profileEdit from "../Assets/img/SVG/profileEdit.svg";
import { useEffect, useRef, useState } from "react";
import DefaultProfileImg from "../Assets/img/SVG/DefaultProfileImg.svg";
import { UserInfo, UserUpdate } from "../Apis/account";
import { useNavigate } from "react-router-dom";

const Social = [
  { title: "친구 추가", root: "/AddFriend" },
  { title: "친구 관리", root: "/manageFriend" },
  { title: "루틴 활동 기록", root: "/routineList" },
];
const setting = [
  { title: "자주 묻는 질문" },
  { title: "버그 제보" },
  { title: "고객센터" },
];

export const MyPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await UserInfo();
        setNickname(response.data.nickname);
        setImage(
          response.data.profile === "BASE_PROFILE_URL"
            ? DefaultProfileImg
            : response.data.profile
        );
        setUserId(response.data.userId);
        console.log(setImage);

        setEditMode(false);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfo();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleEditClick = () => setEditMode(true);

  const handleSaveClick = async () => {
    try {
      await handleUpdate();
      setEditMode(false);
    } catch (error) {
      console.error("회원정보 수정 실패", error);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleImageClick = () => {
    if (editMode) {
      fileInputRef.current?.click();
    }
  };

  const handleUpdate = async () => {
    const requestData = {
      nickname,
    };

    const formData = new FormData();

    formData.append(
      "body",
      new Blob([JSON.stringify(requestData)], { type: "application/json" })
    );

    if (imageFile) {
      formData.append("file", imageFile);
    }

    await UserUpdate(formData);
  };

  return (
    <div css={Container}>
      <div css={Profile}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <img
          css={ProfileImg}
          src={image}
          onClick={handleImageClick}
          style={{ cursor: editMode ? "pointer" : "default" }}
        />
        <div css={TextWrapper}>
          <div css={NickName}>
            {editMode ? (
              <input
                type="text"
                css={Input}
                value={nickname}
                onChange={handleNicknameChange}
              />
            ) : (
              <Font text={nickname} kind="headLine2" color="defaultBlack" />
            )}
            {editMode ? (
              <img css={Update} src={editCheck} onClick={handleSaveClick} />
            ) : (
              <img css={Update} src={profileEdit} onClick={handleEditClick} />
            )}
          </div>
          <Font text={`@${userId}`} kind="bodyText1" color="disableGray" />
        </div>
      </div>
      <div css={TextWrapper}>
        <div css={title}>
          <Font text="활동 및 소셜" kind="bodyTItle" color="basicTextColor" />
        </div>
        <div css={Content}>
          {Social.map((element, index) => (
            <Font
              key={index}
              text={element.title}
              kind="bodyTItle"
              color="defaultBlack"
              onClick={() => navigate(element.root)}
            />
          ))}
        </div>
      </div>
      <div css={TextWrapper}>
        <div css={title}>
          <Font text="기타 설정" kind="bodyTItle" color="basicTextColor" />
        </div>
        <div css={Content}>
          {setting.map((element, index) => (
            <Font
              key={index}
              text={element.title}
              kind="bodyTItle"
              color="defaultBlack"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin-top: 80px;
`;

const Profile = css`
  display: flex;
  padding-left: 40px;
  align-self: flex-start;
  align-items: center;
  gap: 40px;
`;

const ProfileImg = css`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: none;
`;

const TextWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NickName = css`
  display: flex;
  gap: 10px;
`;

const Update = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Input = css`
  border: none;
  border-bottom: 1px solid ${Color.defaultBlack};
  background: transparent;
  outline: none;
  font-size: 20px;
  padding: 5px 5px;
  width: 150px;
`;

const title = css`
  display: flex;
  align-self: flex-start;
`;

const Content = css`
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 30px;
  background-color: ${Color.lightGrayBackground};
  border-radius: 10px;
`;
