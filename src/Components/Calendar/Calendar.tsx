import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import leftArrow from "../../Assets/img/SVG/leftArrow.svg";
import rightArrow from "../../Assets/img/SVG/rightArrow.svg";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({ onDateSelect }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getStartAndEndDays = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(1 - firstDayOfMonth.getDay());
    const endDay = new Date(year, month + 1, 0);
    return { startDay, endDay };
  };

  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = [];
    let currentWeek = [];
    let currentDate = new Date(startDay);

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate));
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth() + (direction === "prev" ? -1 : 1),
          1
        )
    );
  };

  const isToday = (date: Date) =>
    new Date().toDateString() === date.toDateString();
  const isPastDate = (date: Date) => date < new Date();
  const isCurrentMonth = (date: Date) =>
    date.getMonth() === currentDate.getMonth();
  const isSelectedDate = (date: Date) =>
    selectedDate?.toDateString() === date.toDateString();

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const { startDay, endDay } = getStartAndEndDays();
  const weeks = groupDatesByWeek(startDay, endDay);

  return (
    <S.Container>
      <S.CalendarShiftWrap>
        <div onClick={() => handleMonthChange("prev")}>
          <img src={leftArrow} alt="" />
        </div>
        <Font kind={"headLine1"} text={`${year}년 ${month + 1}월`} />
        <div onClick={() => handleMonthChange("next")}>
          <img src={rightArrow} alt="" />
        </div>
      </S.CalendarShiftWrap>
      <S.DayWrap>
        {daysOfWeek.map((day, index) => (
          <S.Day key={index}>
            <Font kind={"bodyTItle"} text={day} />
          </S.Day>
        ))}
      </S.DayWrap>
      <S.Month>
        {weeks.map((week, weekIndex) => (
          <S.Week key={weekIndex}>
            {week.map((date, dateIndex) => (
              <S.Date
                key={dateIndex}
                onClick={() => handleDateClick(date)}
                isToday={isToday(date)}
                isPast={isPastDate(date)}
                isCurrentMonth={isCurrentMonth(date)}
                isSelected={isSelectedDate(date)}
              >
                {date.getDate().toString()}
              </S.Date>
            ))}
          </S.Week>
        ))}
      </S.Month>
    </S.Container>
  );
};

export default Calendar;
