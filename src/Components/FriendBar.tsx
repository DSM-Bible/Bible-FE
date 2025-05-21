import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { Friend } from "../Apis/Friend/type";
import { AcceptFriend, DeleteFriend } from "../Apis/Friend";
import { CheckModal } from "./CheckModal";
import { useState } from "react";
import defaultimg from "../Assets/img/SVG/DefaultProfileImg.svg";

export const FriendBar = ({ value }: { value: Friend }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const handleDelete = async () => {
    try {
      await DeleteFriend(value);
      setShowModal(false);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async () => {
    try {
      await AcceptFriend({ friend_id: value.friend_id });
      setShowAcceptModal(false);
      location.reload();
      console.log(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div css={Container}>
        <div css={InfoBox}>
          {value.image_url === "BASE_PROFILE_URL" ? (
            <img css={profile} src={defaultimg} alt="" />
          ) : (
            <img css={profile} src={value.image_url} alt="" />
          )}
          <div>
            <Font
              text={value.friend_name}
              kind="bodyText1"
              color="defaultBlack"
            />
            <Font text={value.friend_id} kind="bodyText2" color="disableGray" />
          </div>
        </div>
        {value.is_accepted ? (
          <div css={Delete} onClick={() => setShowModal(true)}>
            <Font text="친구 삭제" kind="bodyText3" color="defaultRed" />
          </div>
        ) : (
          <div css={BtnBox}>
            <div css={Accept} onClick={() => setShowAcceptModal(true)}>
              <Font text="수락" kind="bodyText3" color="mainColor" />
            </div>
            <div css={Delete} onClick={() => setShowModal(true)}>
              <Font text="거절" kind="bodyText3" color="defaultRed" />
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <CheckModal
          title="친구 삭제"
          content1={`'${value.friend_name}'님을`}
          content2="친구 목록에서 삭제하시겠습니까?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
      {showAcceptModal && (
        <CheckModal
          title="친구 수락"
          content1={`'${value.friend_name}'님을`}
          content2="친구로 수락하시겠습니까?"
          onCancel={() => setShowAcceptModal(false)}
          onConfirm={handleAccept}
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

const BtnBox = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Accept = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 20px;
  border: 1px solid ${Color.mainColor};
  border-radius: 10px;
`;

const Delete = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 20px;
  border: 1px solid ${Color.defaultRed};
  border-radius: 10px;
`;
