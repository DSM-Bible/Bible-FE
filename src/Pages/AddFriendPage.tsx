import { css } from "@emotion/react";
import BackIcon from "../Assets/img/SVG/Back.svg";
import { Font } from "../Styles/Font";
import { Search } from "../Components/Search";
import { useState } from "react";
import { AddFriendBar } from "../Components/AddFriendBar";

export const AddFriendPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" />
        <Font text="친구 추가" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search onChange={setSearch} />
        <AddFriendBar />
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
