"use client";

import IconArrowTop from "../../../public/icons/icon-arrow-top.svg";

export const TopScrollBtn: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className="w-8 h-8 rounded-full flex items-center justify-center bg-green-secondary hover:text-green-secondary hover:bg-green-primary focus:text-green-secondary focus:bg-green-primary transition_prop"
    >
      <IconArrowTop className="w-4 h-4" />
    </button>
  );
};
