import { css } from "@emotion/react";
import { Color } from "./Color";

interface FontPropsType {
  text?: string;
  kind?: keyof typeof fonts;
  color?: keyof typeof Color;
  onClick?: () => void;
}

export const Font = ({
  text,
  kind = "",
  color = "defaultBlack",
  onClick,
}: FontPropsType) => {
  return (
    <p
      css={fonts[kind] || fonts[""]}
      style={{ color: Color[color] }}
      onClick={onClick}
    >
      {text}
    </p>
  );
};

const fonts = {
  "": css``,
  header: css`
    font-size: 25px;
    font-weight: 600;
  `,
  headLine1: css`
    font-size: 25px;
    font-weight: 600;
  `,
  headLine2: css`
    font-size: 20px;
    font-weight: 600;
  `,
  bodyTItle: css`
    font-size: 18px;
    font-weight: 600;
  `,
  bodyText1: css`
    font-size: 15px;
    font-weight: 500;
  `,
  bodyText2: css`
    font-size: 12px;
    font-weight: 400;
  `,
  bodyText3: css`
    font-size: 10px;
    font-weight: 400;
  `,
  description: css`
    font-size: 14px;
    font-weight: 400;
  `,
  btnText: css`
    font-size: 20px;
    font-weight: 500;
  `,
  modalText: css`
    font-size: 18px;
    font-weight: 400;
  `,
};
