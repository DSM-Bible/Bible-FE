import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { RoutineInput } from "../../Components/RoutineInput";
import { RoutineTime } from "../../Components/RoutineTime";
import { Navbar } from "../../Components/Navbar";
import { useState } from "react";
import { Add } from "../../Apis/calendar";
import { Color } from "../../Styles/Color";
import { Font } from "../../Styles/Font";
import { useNavigate } from "react-router-dom";

export const ScheduleAdd = () => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [remind, setRemind] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await Add({
        title,
        startTime: startTime.replace("T", " "),
        remind: Number(remind),
      });
      console.log(startTime);
      navigate("/calendar")
      // console.log({
      //   title,
      //   startTime: startTime.replace("T", " "),
      //   remind: Number(remind)
      // });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div css={Container}>
        <Header FontText="일정 생성" />
        <div css={ContentBox}>
          <div css={InputBox}>
            <RoutineInput
              placeholder="일정 이름을 입력해주세요"
              label="일정 이름"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <Font text="알림 시간" kind="bodyText1" color={"defaultBlack"} />
              <input
                css={StartTime}
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <RoutineInput
              placeholder="몇 분 전에 일정을 알려드릴까요?"
              label="알림 시간"
              value={remind}
              onChange={(e) => setRemind(e.target.value)}
            />
          </div>
          <nav css={Nav}>
            <Button text="일정 생성" onClick={handleSubmit} />
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

const Nav = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  bottom: 0px;
`;
