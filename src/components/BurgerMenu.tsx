"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { MainNav } from "./MainNav";
import { SocNav } from "./SocNav";

import IconClose from "../../public/icons/icon-close.svg";

type Props = {
  handleClose: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ handleClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-green-alpha-25 backdrop-blur-[2px] flex"
    >
      <div
        className="w-full mx-auto px-[20px] md:px-[30px] xl:px-[20px] sm:w-[480px] md:w-[768px] xl:w-[1280px] h-full py-9 md:py-[42px] xl:py-[30px]"
        onClick={handleBackdropClick}
      >
        <div
          className="outline-dashed outline-red-600 w-full h-full  flex flex-col items-center md:items-end"
          onClick={handleBackdropClick}
        >
          <div className="w-full z-20 preSm:w-[320px] xl:w-[365px] h-full bg-green-alpha-75 rounded-[25px] backdrop-blur-[12.5px] text-white-secondary px-5 py-6 font-fira-sans flex flex-col">
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center gap-1 mb-2 text-[20px] tracking-[-0.8px] hover:text-green-secondary focus:text-green-secondary transition_prop"
            >
              <IconClose className="w-5 h-5" />
              close
            </button>

            <div className="w-full grow px-1 pt-6 border-t-[1px] flex flex-col justify-between overflow-scroll">
              <MainNav onClick={handleClose} />

              <SocNav location="burger-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("menu")!
  );
};
