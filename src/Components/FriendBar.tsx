import { css } from "@emotion/react";
import FriendImg from "../Assets/img/SVG/Friend.svg";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";

export const FriendBar = () => {
  return (
    <div css={Container}>
      <div css={InfoBox}>
        <img src={FriendImg} alt="" />
        <div>
          <Font text="UserName" kind="bodyText1" color="defaultBlack" />
          <Font text="UserId" kind="bodyText2" color="disableGray" />
        </div>
      </div>
      <div css={BtnBox}>
        <div css={Accept}>
          <Font text="수락" kind="bodyText3" color="mainColor" />
        </div>
        <div css={Delete}>
          <Font text="거절" kind="bodyText3" color="defaultRed" />
        </div>
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 65px;
  padding: 0 20px;
  gap: 15px;
  border-bottom: 1px solid ${Color.disableGray};
`;

const InfoBox = css`
  display: flex;
  align-items: center;
  gap: 15px;
`

const BtnBox = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Accept = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  border: 1px solid ${Color.mainColor};
  border-radius: 10px;
`;

const Delete = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  border: 1px solid ${Color.defaultRed};
  border-radius: 10px;
`;
