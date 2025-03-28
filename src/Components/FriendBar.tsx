import { css } from "@emotion/react";
import FriendImg from "../Assets/img/SVG/Friend.svg";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const FriendBar = () => {
  return (
    <div css={Container}>
      <img src={FriendImg} alt="" />
      <div>
        <Font text="UserName" kind="bodyText1" color="defaultBlack" />
        <Font text="UserId" kind="bodyText2" color="disableGray" />
      </div>
      <div css={Delete}>
        <Font text="친구 삭제" kind="bodyText3" color="defaultRed" />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 65px;
  padding-left: 15px;
  gap: 15px;
  border-bottom: 1px solid ${Color.disableGray};
`;

const Delete = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 20px;
  border: 1px solid ${Color.defaultRed};
  border-radius: 10px;
  margin-left: 50px;
`