import styled from "@emotion/styled";
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
    <Container>
      {Menus.map((element, index) => (
        <Menu key={index}>
          <Icon src={element.icon} />
          <Font text={element.name} kind="description" color="disableGray" />
        </Menu>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
