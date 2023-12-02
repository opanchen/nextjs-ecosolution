import Link from "next/link";

import LogoIcon from "../../../public/icons/logo-element.svg";

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-1 text-green-primary">
      <LogoIcon className="w-[31px] h-[18px]" />
      <span
        // className="inline-block text-[33px] font-gothic font-medium tracking-[-1.32px]"
        className="inline-block text-[33px] font-gothic font-medium tracking-[-2.24px]"
      >
        ecosolution
      </span>
      <span className="font-saygon uppercase text-[10px] leading-[0.9] tracking-[-0.4px]">
        <span className="text-green-secondary">green</span>
        ergy
        <br />
        for life
      </span>
    </Link>
  );
};
