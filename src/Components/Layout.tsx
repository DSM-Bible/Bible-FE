import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div css={NavbarWrapper}>
        <Navbar />
      </div>
    </>
  );
};

const NavbarWrapper = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  padding-bottom: 10px;
  background-color: white;
`;
