"use client";

import Link from "next/link";

import IconArrowDown from "../../../public/icons/icon-arrow-down.svg";
import IconArrowRight from "../../../public/icons/icon-arrow-right.svg";

type Props = {
  label: string;
  path: string;
  location?: string;
  className?: string;
};

export const AnchorBtn: React.FC<Props> = ({
  label,
  path,
  location = "",
  className = "",
}) => {
  if (location === "hero") {
    return (
      <Link
        href={path}
        className={`group h-[40px] inline-flex items-center text-[16px] tracking-[-0.64px] gap-3 font-fira-sans pl-4 pr-1 py-1 rounded-[500px] border-[1px] border-green-secondary text-green-primary focus:bg-green-primary hover:bg-green-primary hover:text-green-secondary focus:text-green-secondary hover:border-green-primary focus:border-green-primary transition_prop ${className}`}
      >
        {label}
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-secondary text-green-primary">
          <IconArrowRight
            className="w-4 h-4"
            // className="group-hover:bg-green-secondary group-focus:bg-green-secondary w-[14px] h-[14px] bg-green-primary text-green-primary rounded-full transition_prop"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={path}
      className={`group h-[40px] items-center text-[16px] tracking-[-0.64px] gap-3 font-fira-sans px-4 py-[10px] rounded-[500px] bg-green-secondary text-green-primary focus:bg-green-primary hover:bg-green-primary hover:text-green-secondary focus:text-green-secondary fill-green-secondary transition_prop ${className}`}
    >
      {label}{" "}
      <IconArrowDown className="group-hover:bg-green-secondary group-focus:bg-green-secondary w-[14px] h-[14px] bg-green-primary text-green-primary rounded-full transition_prop" />
    </Link>
    // <button type="button" className={` ${className}`}>
    //   {label}
    // </button>
  );
};
