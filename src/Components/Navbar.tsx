import { css } from "@emotion/react";
import calender from "../Assets/img/SVG/calender.svg";
import routine from "../Assets/img/SVG/routine.svg";
import home from "../Assets/img/SVG/home.svg";
import notice from "../Assets/img/SVG/notice.svg";
import my from "../Assets/img/SVG/my.svg";
import { Font } from "../Styles/Font";

const Menus = [
  { icon: calender, name: "캘린더" },
  { icon: routine, name: "루틴" },
  { icon: home, name: "홈" },
  { icon: notice, name: "게시판" },
  { icon: my, name: "MY" },
];

export const Navbar = () => {
  return (
    <div css={Container}>
      {Menus.map((element, index) => (
        <div key={index} css={Menu}>
          <img src={element.icon} css={Icon} />
          <Font text={element.name} kind="description" color="disableGray" />
        </div>
      ))}
    </div>
  );
};

const Container = css`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Menu = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Icon = css`
  width: 28px;
  height: 28px;
`;
