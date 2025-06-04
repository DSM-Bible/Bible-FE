import { TodayRoutine } from "../Components/TodayRoutine";
import { Todo } from "../Components/Todo";
import { Font } from "../Styles/Font";
import Main from "../Assets/img/PNG/main.png";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { RoutineList } from "../Apis/Routine";
import { RoutineListResponse } from "../Apis/Routine/type";

export const MainPage = () => {
  const [data, setData] = useState<RoutineListResponse | null>(null);

  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${date}`;
  };

  useEffect(() => {
    const getUserList = async () => {
      try {
        const response = await RoutineList(getToday());

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  return (
    <div css={Container}>
      <Font text="반가워요 섹시걸님!" kind="headLine1" color="basicTextColor" />
      <Font
        text="오늘도 힘내서 갓생을 살아봅시다!"
        kind="headLine2"
        color="basicTextColor"
      />
      <div css={Wrapper}>
        <div>
          <img src={Main} css={Image} />
        </div>
        <Font
          text="오늘 할일을 한눈에 확인해보세요"
          kind="bodyText1"
          color="disableGray"
        />
      </div>
      <Font text="오늘의 TO-DO" kind="bodyTItle" color="basicTextColor" />
      <div css={Wrapper}>
        <div css={TodoWrapper}>
          <Todo title="디자인 완성하기" />
          <Todo title="메인 연동 끝내기" />
          <Todo title="발표 준비 마무리" />
        </div>
        <Font
          text="오늘 할일을 한눈에 확인해보세요"
          kind="bodyText1"
          color="disableGray"
        />
      </div>
      <Font text="오늘의 루틴" kind="bodyTItle" color="basicTextColor" />
      <TodayRoutine routine={data?.data?.[0]} />
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  margin: 100px 31px 10px;
  gap: 5px;
`;

const Image = css`
  width: 100%;
`;

const TodoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
