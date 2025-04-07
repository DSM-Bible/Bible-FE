import { css } from "@emotion/react";
import { useState } from "react";
import { Color } from "../Styles/Color";
import SearchDefault from "../Assets/img/SVG/searchDefault.svg";
import SearchFocus from "../Assets/img/SVG/searchFocus.svg";

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div css={Container}>
      <img
        css={IconStyle}
        src={isFocused ? SearchFocus : SearchDefault}
        alt="Search icon"
      />
      <input
        css={InputStyle(isFocused)}
        type="text"
        placeholder="검색"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Container = css`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputStyle = (isFocused: boolean) => css`
  width: 300px;
  height: 30px;
  padding-left: 40px;
  border: none;
  border-bottom: 1px solid ${isFocused ? Color.mainColor : Color.disableGray};
  outline: none;
`;

const IconStyle = css`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
