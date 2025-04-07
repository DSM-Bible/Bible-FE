import { useRef, useState } from "react";
import { css } from "@emotion/react";
import InputDefault from "../Assets/img/SVG/InputDefault.svg";
import InputFocus from "../Assets/img/SVG/InputFocus.svg";
import lockDefault from "../Assets/img/SVG/lockDefault.svg";
import lockFocus from "../Assets/img/SVG/lockFocus.svg";
import closeEyesDefault from "../Assets/img/SVG/closeEyesDefault.svg";
import closeEyesFoucs from "../Assets/img/SVG/closeEyesFocus.svg";
import openEyesDefault from "../Assets/img/SVG/openEyesDefault.svg";
import openEyesFocus from "../Assets/img/SVG/openEyesFocus.svg";
import { Color } from "../Styles/Color";

interface InputProps {
  type?: string;
  placeholder?: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getIcon = () => {
    if (type === "password") {
      return isFocused ? lockFocus : lockDefault;
    }
    return isFocused ? InputFocus : InputDefault;
  };

  const getEyesIcon = () => {
    if (type === "password") {
      if (isPasswordVisible) {
        return isFocused ? openEyesFocus : openEyesDefault;
      }
      return isFocused ? closeEyesFoucs : closeEyesDefault;
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div css={Container}>
      <img src={getIcon()} alt="input-icon" />
      <input
        ref={inputRef}
        css={InputStyle}
        type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {type === "password" && (
        <img
          src={getEyesIcon()}
          alt="eye-icon"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

const Container = css`
  display: flex;
  align-items: center;
  width: 340px;
  height: 50px;
  gap: 10px;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  padding: 0 10px;
`;

const InputStyle = css`
  display: flex;
  width: 270px;
  height: 30px;
  outline: none;
  border: none;
  font-size: 15px;
  font-weight: 500;
`;