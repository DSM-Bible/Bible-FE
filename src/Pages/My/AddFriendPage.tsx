import { css } from "@emotion/react";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { Font } from "../../Styles/Font";
import { Search } from "../../Components/Search";
import { useEffect, useState } from "react";
import { AddFriendBar } from "../../Components/AddFriendBar";
import { UserList } from "../../Apis/Friend";
import { UserListResponse } from "../../Apis/Friend/type";
import { useNavigate } from "react-router-dom";

export const AddFriendPage = () => {
  const [data, setData] = useState<UserListResponse | null>(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserList = async () => {
      try {
        const response = await UserList();
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  const usersList = () => {
    if (!data || !data.user) return [];
    if (search === "") return data.user;
    return data.user.filter(
      (user) =>
        user.userName.toLowerCase().includes(search.toLowerCase()) ||
        user.userId.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" onClick={() => navigate(-1)} />
        <Font text="친구 추가" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search onChange={setSearch} />
        {usersList().map((value) => (
          <AddFriendBar
            key={value.userId}
            value={value}
            requestData={{ friend_id: value.userId }}
          />
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
