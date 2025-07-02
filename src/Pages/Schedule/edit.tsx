import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { RoutineInput } from "../../Components/RoutineInput";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  EditProps,
  EditSchedule,
  GetList,
  ListData,
} from "../../Apis/calendar";
import { Font } from "../../Styles/Font";
import { Color } from "../../Styles/Color";

export const ScheduleEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [remind, setRemind] = useState("30");

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await GetList(id);
        const data: ListData = response.data;

        setTitle(data.title);
        setStartTime(data.startTime.replace(" ", "T"));
        setRemind(data.remind);
        console.log(startTime);
      } catch (err) {
        console.error("일정 데이터를 불러오는데 실패했습니다", err);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    if (!id) return;
    const fullStartTime = startTime.replace("T", " ");

    const data: EditProps = {
      title,
      startTime: fullStartTime,
      remind: parseInt(remind),
    };

    try {
      await EditSchedule(id, data);
      navigate("/calendar");
    } catch (err) {
      console.error("일정 수정에 실패했습니다", err);
    }
  };
  return (
    <div css={Container}>
      <Header FontText="일정 수정" />
      <div css={ContentBox}>
        <div css={InputBox}>
          <RoutineInput
            placeholder="일정 이름을 입력해주세요"
            label="일정 이름"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <Font text="시작 시간" kind="bodyText1" color={"defaultBlack"} />
            <input
              css={StartTime}
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <RoutineInput
            label="알림 시간(분)"
            value={remind}
            onChange={(e) => setRemind(e.target.value)}
          />
        </div>
        <Button text="일정 수정" onClick={handleEdit} />
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: 100px;
`;

const ContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  gap: 25px;
`;

const InputBox = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StartTime = css`
  font-size: 15px;
  font-weight: 500;
  width: 320px;
  height: 50px;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  outline: none;
  padding: 0 10px;

  &::placeholder {
    color: black;
  }
`;
