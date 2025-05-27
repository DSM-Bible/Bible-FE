/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Color } from "../Styles/Color";

export const RoutineDateSelector = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const years = Array.from({ length: 10 }, (_, i) => 2024 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div css={Wrapper}>
      <select
        css={Select}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">연</option>
        {years.map((y) => (
          <option key={y} value={y}>
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
          <option key={m} value={m}>
            {m}월
          </option>
        ))}
      </select>

      <select css={Select} value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">일</option>
        {days.map((d) => (
          <option key={d} value={d}>
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
