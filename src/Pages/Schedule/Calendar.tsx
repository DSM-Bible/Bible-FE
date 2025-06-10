import { css } from "@emotion/react";
import Calendar from "../../Components/Calendar/Calendar";
import { Font } from "../../Styles/Font";
import { Navbar } from "../../Components/Navbar";
import plus from "../../Assets/img/SVG/plus.svg";
import edit from "../../Assets/img/SVG/edit.svg";
import minus from "../../Assets/img/SVG/delete.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteSchedule, GetAllSchedules, ScheduleItem } from "../../Apis/calendar";

export const Schedule = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [scheduleList, setScheduleList] = useState<ScheduleItem[]>([]);
  const [checkedMap, setCheckedMap] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetAllSchedules();
        setScheduleList(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const MoveAdd = () => {
    navigate("/scheduleadd");
  };

  const handleChecked = (id: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleDelete = async (id: string) => {
    console.log(id);
    
    try {
      await DeleteSchedule(id);
      const res = await GetAllSchedules();
      setScheduleList(res.data.data);
    } catch(err) {
      console.error(err);
    }
  }

  const getTodayString = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${month}월 ${date}일 일정`
  }

  return (
    <>
      <div css={Container}>
        <div css={ContentBox}>
          <div css={FontBox}>
            <Font text="캘린더" kind={"headLine1"} color={"defaultBlack"} />
            <Font
              text="오늘 할 일을 한눈에 확인해 보세요"
              kind={"bodyText1"}
              color={"disableGray"}
            />
          </div>
          <Calendar />
          <div css={TodayCheckBox}>
            <div css={TodayCheckTitle}>
              <Font
                text={getTodayString()}
                kind={"headLine2"}
                color={"defaultBlack"}
              />
              <button css={PlusBtn} onClick={MoveAdd}>
                <img src={plus} alt="" />
              </button>
            </div>
            {scheduleList.map((item) => (
              <div key={item.id} css={CheckBox}>
                <div css={Check}>
                  <input
                    type="checkbox"
                    checked={!!checkedMap[item.id]}
                    onChange={() => handleChecked(item.id)}
                  />
                  <span css={CheckText(!!checkedMap[item.id])}>{item.title}</span>
                </div>
                <div css={CheckImg}>
                  <button>
                    <img src={edit} alt="" />
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <img src={minus} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <nav css={Navbox}>
            <Navbar />
          </nav>
        </div>
      </div>
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 50px;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 400px;
`;

const FontBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const TodayCheckBox = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TodayCheckTitle = css`
  display: flex;
  width: 100%;
  gap: 200px;
`;

const PlusBtn = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const CheckBox = css`
  display: flex;
  justify-content: space-between;
`;

const CheckText = (isChecked: boolean) => css`
  color: ${isChecked ? "#929292" : "#000000"};
  text-decoration: ${isChecked ? "line-through" : "none"};
`;

const Check = css`
  display: flex;
  gap: 10px;
`;

const CheckImg = css`
  display: flex;
  gap: 10px;

  > button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Navbox = css`
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
`;
