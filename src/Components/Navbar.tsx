import { css } from "@emotion/react";
import calender from "../Assets/img/SVG/calender.svg";
import routine from "../Assets/img/SVG/routine.svg";
import home from "../Assets/img/SVG/home.svg";
import notice from "../Assets/img/SVG/notice.svg";
import my from "../Assets/img/SVG/my.svg";
import calenderColor from "../Assets/img/SVG/calenderColor.svg";
import routineColor from "../Assets/img/SVG/routineColor.svg";
import homeColor from "../Assets/img/SVG/homeColor.svg";
import noticeColor from "../Assets/img/SVG/noticeColor.svg";
import myColor from "../Assets/img/SVG/myColor.svg";
import { Font } from "../Styles/Font";
import { useLocation, useNavigate } from "react-router-dom";

const Menus = [
  {
    icon: calender,
    colorIcon: calenderColor,
    name: "캘린더",
    navigation: "/calendar",
  },
  {
    icon: routine,
    colorIcon: routineColor,
    name: "루틴",
    navigation: "/routine",
  },
  { icon: home, colorIcon: homeColor, name: "홈", navigation: "/main" },
  {
    icon: notice,
    colorIcon: noticeColor,
    name: "게시판",
    navigation: "/boardlist",
  },
  { icon: my, colorIcon: myColor, name: "MY", navigation: "/my" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div css={Container}>
      {Menus.map((element, index) => {
        const isActive = location.pathname === element.navigation;
        return (
          <div
            key={index}
            css={Menu}
            onClick={() => navigate(element.navigation)}
          >
            {isActive ? (
              <img src={element.colorIcon} css={Icon} />
            ) : (
              <img src={element.icon} css={Icon} />
            )}
            <Font
              text={element.name}
              kind="description"
              color={isActive ? "mainColor" : "disableGray"}
            />
          </div>
        );
      })}
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
