import { css } from "@emotion/react";
import { Search } from "../../Components/Search";
import { FriendBar } from "../../Components/FriendBar";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { Font } from "../../Styles/Font";
import { useEffect, useState } from "react";
import { FriendListResponse } from "../../Apis/Friend/type";
import { FriendList } from "../../Apis/Friend";

export const ManageFriendPage = () => {
  const [data, setData] = useState<FriendListResponse | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getFriendList = async () => {
      try {
        const response = await FriendList();
        setData(response.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    getFriendList();
  }, []);

  const friendsList = () => {
    if (!data || !data.friend) return [];
    if (search === "") return data.friend;
    return data.friend.filter(
      (friend) =>
        friend.friend_name.toLowerCase().includes(search.toLowerCase()) ||
        friend.friend_id.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" />
        <Font text="친구 관리" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search onChange={setSearch} />
        {friendsList().map((value) => (
          <FriendBar key={value.friend_id} value={value} />
        ))}
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
