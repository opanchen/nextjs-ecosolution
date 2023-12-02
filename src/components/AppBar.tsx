import { AnchorBtn } from "./ui/AnchorBtn";
import { BurgerBtn } from "./ui/BurgerBtn";

export const AppBar: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <BurgerBtn />

      <AnchorBtn
        label="Get in touch"
        path="#contacts"
        className="hidden md:flex"
      />
    </div>
  );
};
