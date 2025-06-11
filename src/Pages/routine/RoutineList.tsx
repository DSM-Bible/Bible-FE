import { css } from "@emotion/react";
import { Search } from "../../Components/Search";
import BackIcon from "../../Assets/img/SVG/Back.svg";
import { useEffect, useState } from "react";
import { Font } from "../../Styles/Font";
import { MyRoutine } from "../../Components/MyRoutine";
import { RoutineHistory } from "../../Apis/Routine";
import { RoutineHistoryType } from "../../Apis/Routine/type";
import { useNavigate } from "react-router-dom";

export const RoutineList = () => {
  const [data, setData] = useState<RoutineHistoryType[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getRoutineList = async () => {
      try {
        const response = await RoutineHistory();
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRoutineList();
  }, []);

  const routineList = () => {
    if (!data) return [];
    if (search === "") return data;
    return data.filter(
      (data) =>
        data.title.toLowerCase().includes(search.toLowerCase()) ||
        data.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div css={Container}>
      <div css={Title}>
        <img css={Back} src={BackIcon} alt="" onClick={() => navigate(-1)} />
        <Font text="루틴 기록" kind="header" color="basicTextColor" />
      </div>
      <div css={Wrapper}>
        <Search onChange={setSearch} />
        {routineList().map((value) => (
          <MyRoutine key={value.title} value={value} />
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
