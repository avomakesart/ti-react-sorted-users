import React, { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  onClick: any;
  type: "button" | "submit" | "reset";
  children: ReactNode | ReactNode[];
  btnType: string | undefined;
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  type,
  children,
  btnType,
  disabled
}) => {
  const buttonStyle = [
    "button",
    btnType === "primary"
      ? "primary"
      : btnType === "secondary"
      ? "secondary"
      : btnType === "disabled"
      ? "disabled"
      : ""
  ]
    .join(" ")
    .trim();

  return (
    <>
      <button
        className={buttonStyle}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
