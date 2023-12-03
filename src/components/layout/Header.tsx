"use client";

import { AppBar, Container, Logo } from "@components";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-10 top-0 left-0 right-0 pt-9 pb-4 xl:pt-6 bg-white-primary ${
        scroll ? "bg-white-secondary" : "bg-white-primary"
      }`}
    >
      <Container>
        <div className="w-full flex items-center justify-between">
          <Logo />
          <AppBar />
        </div>
      </Container>
    </header>
  );
};
