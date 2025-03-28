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
  return <StyledFont color={Color[color]}>{text}</StyledFont>;
};

const fonts = {
  "": styled.p``,
  header: styled.p<{ color: string }>`
    font-size: 25px;
    font-weight: 600;
    color: ${({ color }) => color};
  `,
  headLine1: styled.p<{ color: string }>`
    font-size: 25px;
    font-weight: 600;
    color: ${({ color }) => color};
  `,
  headLine2: styled.p<{ color: string }>`
    font-size: 20px;
    font-weight: 600;
    color: ${({ color }) => color};
  `,
  bodyTItle: styled.p<{ color: string }>`
    font-size: 18px;
    font-weight: 600;
    color: ${({ color }) => color};
  `,
  bodyText1: styled.p<{ color: string }>`
    font-size: 15px;
    font-weight: 500;
    color: ${({ color }) => color};
  `,
  bodyText2: styled.p<{ color: string }>`
    font-size: 12px;
    font-weight: 400;
    color: ${({ color }) => color};
  `,
  bodyText3: styled.p<{ color: string }>`
    font-size: 10px;
    font-weight: 400;
    color: ${({ color }) => color};
  `,
  description: styled.p<{ color: string }>`
    font-size: 14px;
    font-weight: 400;
    color: ${({ color }) => color};
  `,
  btnText: styled.p<{ color: string }>`
    font-size: 20px;
    font-weight: 500;
    color: ${({ color }) => color};
  `,
  modalText: styled.p<{ color: string }>`
    font-size: 18px;
    font-weight: 400;
    color: ${({ color }) => color};
  `,
};
