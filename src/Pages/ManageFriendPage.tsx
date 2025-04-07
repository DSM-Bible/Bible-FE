import { css } from "@emotion/react";
import { Search } from "../Components/Search";
import { FriendBar } from "../Components/FriendBar";
import BackIcon from "../Assets/img/SVG/Back.svg";
import { Font } from "../Styles/Font";

export const ManageFriendPage = () => {
  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" />
        <Font text="친구 관리" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 55px 31px;
`;

const Title = css`
  display: flex;
  gap: 35%;
`;

const Back = css`
  width: 15px;
  height: 30px;
`;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
