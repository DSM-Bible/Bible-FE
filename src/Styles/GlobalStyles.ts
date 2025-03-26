import { Global, css } from "@emotion/react";
import { jsx as _jsx } from "react/jsx-runtime";

const GlobalStyle = () =>
  _jsx(Global, {
    styles: css`
      * {
        margin: 0;
        padding: 0;
        font-family: Pretendard, sans-serif;
      }
    `,
  });

export default GlobalStyle;
