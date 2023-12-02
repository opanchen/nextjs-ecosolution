import Link from "next/link";

import { useHash } from "@utils/hooks";

import data from "../data/navigation.json";

import IconArrowRightUp from "../../public/icons/icon-arrow-right-up.svg";

type Props = {
  onClick?: () => void;
};

export const MainNav: React.FC<Props> = ({ onClick = () => {} }) => {
  const hash = useHash();

  const { navLinks } = data;
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navLinks.map(({ label, path }) => {
          const isActive = hash === path.slice(1, path.length);

          return (
            <li key={label}>
              <Link
                href={path}
                onClick={onClick}
                className={`flex items-center gap-2 text-[24px] tracking-[-0.96px] hover:text-white-secondary focus:text-white-secondary transition_prop ${
                  isActive ? "text-green-secondary" : "text-white-secondary/25"
                }`}
              >
                {label} <IconArrowRightUp className="w-4 h-4" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
