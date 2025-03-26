import styled from "@emotion/styled";
import { Color } from "./Color";

interface FontPropsType {
  text?: string;
  kind?: keyof typeof fonts;
  color?: keyof typeof Color;
}

export const Font = ({
  text,
  kind = "",
  color = "defaultBlack",
}: FontPropsType) => {
  const StyledFont = fonts[kind] || fonts[""];
  return <StyledFont color={color}>{text}</StyledFont>;
};

const fonts = {
  "": styled.p``,
  header: styled.p`
    font-size: 25px;
    font-weight: 600;
  `,
  headLine1: styled.p`
    font-size: 25px;
    font-weight: 600;
  `,
  headLine2: styled.p`
    font-size: 20px;
    font-weight: 600;
  `,
  bodyTItle: styled.p`
    font-size: 18px;
    font-weight: 600;
  `,
  bodyText1: styled.p`
    font-size: 15px;
    font-weight: 500;
  `,
  bodyText2: styled.p`
    font-size: 12px;
    font-weight: 400;
  `,
  bodyText3: styled.p`
    font-size: 10px;
    font-weight: 400;
  `,
  description: styled.p`
    font-size: 14px;
    font-weight: 400;
  `,
  btnText: styled.p`
    font-size: 20px;
    font-weight: 500;
  `,
  modalText: styled.p`
    font-size: 18px;
    font-weight: 400;
  `,
};