import { css } from "@emotion/react";
import RoutineTimeImg from "../Assets/img/SVG/RoutineTime.svg";
import { useState, useRef, useEffect } from "react";
import { Font } from "../Styles/Font";
import { Color } from "../Styles/Color";
import { RepeatPeriod } from "../Apis/Routine/type";

interface RoutinePeriodProps {
  label?: string;
  value?: RepeatPeriod | null;
  onChange: (value: RepeatPeriod) => void;
}

const options: { label: string; value: RepeatPeriod }[] = [
  { label: "매일", value: "EVERY_DAY" },
  { label: "1주", value: "EVERY_WEEKS" },
  { label: "2주", value: "EVERY_OTHER_WEEKS" },
  { label: "3주", value: "EVERY_THREE_WEEKS" },
  { label: "매달", value: "EVERY_MONTH" },
];

export const RoutinePeriod = ({
  label,
  value,
  onChange,
}: RoutinePeriodProps) => {
  const [selectedOption, setSelectedOption] =
    useState("반복 주기를 선택해 주세요.");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundOption = options.find((option) => option.value === value);
    if (foundOption) {
      setSelectedOption(foundOption.label);
    }
  }, [value]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: { label: string; value: RepeatPeriod }) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onChange(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div css={Container}>
      <Font text={label || ""} kind="bodyText1" color="defaultBlack" />
      <div css={InputBox} onClick={toggleDropdown} ref={dropdownRef}>
        <img css={Img} src={RoutineTimeImg} alt="time icon" />
        <div css={SelectedText}>{selectedOption}</div>
        {isOpen && (
          <div css={Dropdown}>
            {options.map((option) => (
              <div
                key={option.value}
                css={DropdownItem}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  gap: 5px;
`;

const InputBox = css`
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  border: 1px solid ${Color.disableGray};
  border-radius: 15px;
  padding-left: 50px;
  cursor: pointer;
  background-color: white;
`;

const Img = css`
  position: absolute;
  left: 10px;
`;

const SelectedText = css`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Dropdown = css`
  position: absolute;
  font-size: 15px;
  top: 55px;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = css`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
