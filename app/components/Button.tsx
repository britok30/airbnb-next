"use client";

import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
        {
          "bg-white text-black border-black": outline,
          "bg-rose-500 border-rose-500 text-white": !outline,
          "py-1 text-sm font-light border-[1px]": small,
          "py-3 text-md font-semibold border-2": !small,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      {label}
    </button>
  );
};

export default Button;
