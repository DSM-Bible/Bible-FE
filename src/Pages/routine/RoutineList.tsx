import { css } from "@emotion/react";
import { Search } from "../../Components/Search";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { useState } from "react";
import { Font } from "../../Styles/Font";
import { MyRoutine } from "../../Components/MyRoutine";

export const RoutineList = () => {
  const [search, setSearch] = useState("");

  //   const routineList = () => {
  //     if (!data || !data.user) return [];
  //     if (search === "") return data.user;
  //     return data.user.filter(
  //       (user) =>
  //         user.userName.toLowerCase().includes(search.toLowerCase()) ||
  //         user.userId.toLowerCase().includes(search.toLowerCase())
  //     );
  //   };

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" />
        <Font text="루틴 기록" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search onChange={setSearch} />
        <MyRoutine />
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
