"use client";

import { useState } from "react";

import { BurgerMenu } from "../BurgerMenu";

import IconMenu from "../../../public/icons/icon-menu.svg";

export const BurgerBtn: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-light hover:bg-green-secondary focus:bg-green-secondary transition_prop"
        onClick={openMenu}
      >
        <IconMenu className="w-4 h-4 text-black" />
      </button>

      {menuOpen && <BurgerMenu handleClose={closeMenu} />}
    </>
  );
};
