import { css } from "@emotion/react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { RoutineInput } from "../../Components/RoutineInput";
import { RoutineTime } from "../../Components/RoutineTime";
import { Navbar } from "../../Components/Navbar";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ScheduleEdit = () => {
  // const { id } = useParams<{ id: string }>();
  // const [title, setTitle] = useState("");
  // const [startTime, setStartTime] = useState("");
  // const [remind, setRemind] = useState(30);

  // const formatDate = (date: Date): string => {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //   const day = date.getDate().toString().padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };

  // const handleEdit = async () => {
  //   const today = new Date();
  //   const formattedDate = formatDate(today);

  //   const data = {
  //     title, 
  //     start_time: `${formattedDate}T`
  //   }
  
  // }
  // useEffect(() => {
  //   if (!id) return;
  // });

  return (
    <>
      <div css={Container}>
        <Header FontText="일정 수정" />
        <div css={ContentBox}>
          <div css={InputBox}>
            <RoutineInput
              placeholder="일정 이름을 입력해주세요"
              label="일정 이름"
            />
            <RoutineTime label="시작 시간" />
            <RoutineTime label="알림 시간" />
          </div>
          <nav css={Nav}>
            <Button text="일정 생성" />
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

const Nav = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  bottom: 0px;
`;
