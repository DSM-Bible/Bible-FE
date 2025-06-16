import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Color } from "../Styles/Color";

export const RoutineDateSelector = ({
  onChange,
}: {
  onChange: (date: string) => void;
}) => {
  const today = new Date();
  const initialYear = String(today.getFullYear());
  const initialMonth = String(today.getMonth() + 1);
  const initialDay = String(today.getDate());

  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [day, setDay] = useState(initialDay);

  const years = Array.from({ length: 10 }, (_, i) => 2024 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    if (year && month && day) {
      const formattedMonth =
        month.padStart?.(2, "0") ?? String(month).padStart(2, "0");
      const formattedDay =
        day.padStart?.(2, "0") ?? String(day).padStart(2, "0");
      const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
      onChange(formattedDate);
    }
  }, [year, month, day, onChange]);

  return (
    <div css={Wrapper}>
      <select
        css={Select}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">연</option>
        {years.map((y) => (
          <option key={y} value={String(y)}>
            {y}년
          </option>
        ))}
      </select>

      <select
        css={Select}
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="">월</option>
        {months.map((m) => (
          <option key={m} value={String(m)}>
            {m}월
          </option>
        ))}
      </select>

      <select css={Select} value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">일</option>
        {days.map((d) => (
          <option key={d} value={String(d)}>
            {d}일
          </option>
        ))}
      </select>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const Select = css`
  width: 100px;
  height: 40px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${Color.disableGray};
  border-radius: 10px;
  background-color: white;
  color: ${Color.basicTextColor};
  outline: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: ${Color.basicTextColor};
  }
`;
