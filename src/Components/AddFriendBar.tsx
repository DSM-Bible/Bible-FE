import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { useState } from "react";
import { AddFriendRequest, User } from "../Apis/Friend/type";
import { AddFriend } from "../Apis/Friend";
import { CheckModal } from "./CheckModal";
import defaultimg from "../Assets/img/SVG/DefaultProfileImg.svg";

export const AddFriendBar = ({
  value,
  requestData,
}: {
  value: User;
  requestData: AddFriendRequest;
}) => {
  console.log(value);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = async () => {
    try {
      await AddFriend(requestData);
      setShowModal(false);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div css={Container}>
        <div css={InfoBox}>
          {value.imageUrl === "BASE_PROFILE_URL" ? (
            <img css={profile} src={defaultimg} alt="" />
          ) : (
            <img css={profile} src={value.imageUrl} alt="" />
          )}
          <div>
            <Font text={value.userName} kind="bodyText1" color="defaultBlack" />
            <Font text={value.userId} kind="bodyText2" color="disableGray" />
          </div>
        </div>
        <div css={Delete} onClick={() => setShowModal(true)}>
          <Font text="친구 추가" kind="bodyText3" color="mainColor" />
        </div>
      </div>
      {showModal && (
        <CheckModal
          title="친구 추가"
          content2="친구 추가하시겠습니까?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleAdd}
        />
      )}
    </>
  );
};

const Container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  padding: 0 20px;
  gap: 15px;
  border-bottom: 1px solid ${Color.disableGray};
`;

const InfoBox = css`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const profile = css`
  width: 50px;
  height: 50px;
`;

const Delete = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 20px;
  border: 1px solid ${Color.mainColor};
  border-radius: 10px;
`;
