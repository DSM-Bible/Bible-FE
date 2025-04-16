import { css } from "@emotion/react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import bonobono from "../Assets/img/SVG/Friend.svg";

export const AddFriendBar = () => {
  return (
    <div css={Container}>
      <div css={InfoBox}>
        <img src={bonobono} alt="" />
        <div>
          <Font text="safdg" kind="bodyText1" color="defaultBlack" />
          <Font text="sddffdsda" kind="bodyText2" color="disableGray" />
        </div>
      </div>
      <div css={Delete}>
        <Font text="친구 추가" kind="bodyText3" color="mainColor" />
      </div>
    </div>
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

const Delete = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 20px;
  border: 1px solid ${Color.mainColor};
  border-radius: 10px;
`;
