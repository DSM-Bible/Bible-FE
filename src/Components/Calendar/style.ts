import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CalendarShiftWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayWrap = styled.div`
  display: flex;
  gap: 4px;
  
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 32px;
  height: 32px;
  padding: 5px 7px;
  border-radius: 12px;
`;

export const Date = styled.div<{
  isToday: boolean;
  isPast: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
}>`
  width: 32px;
  height: 32px;
  padding: 5px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected
      ? "#23CB85"
      : props.isToday
      ? "#78FFC7"
      : !props.isCurrentMonth
      ? "#F3F3F3"
      : "#FFFFFF"};
  color: ${(props) =>
    props.isSelected
      ? "#FFFFFF"
      : props.isToday
      ? "#000000"
      : !props.isCurrentMonth
      ? "#B4B4B4"
      : "#000000"};
  border-radius: 12px;
  cursor: pointer;
  font-family: "Pretendard-Semibold", sans-serif;
  font-size: 20px;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Week = styled.div`
  display: flex;
  gap: 6px;
`;
