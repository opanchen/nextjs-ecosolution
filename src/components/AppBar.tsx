import { usePathname } from "next/navigation";

import { AnchorBtn } from "./ui/AnchorBtn";
import { BurgerBtn } from "./ui/BurgerBtn";

export const AppBar: React.FC = () => {
  const pathname = usePathname();

  const isHidden = pathname !== "/";

  return (
    <div className={`flex items-center gap-3 ${isHidden ? "hidden" : ""}`}>
      <BurgerBtn />

      <AnchorBtn
        label="Get in touch"
        path="#contacts"
        className="hidden md:flex"
      />
    </div>
  );
};
