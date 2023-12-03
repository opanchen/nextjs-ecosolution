import Link from "next/link";

import data from "../data/navigation.json";

import IconFacebook from "../../public/icons/icon-facebook.svg";
import IconInstagram from "../../public/icons/icon-instagram.svg";

type Props = {
  location: "burger-menu" | "contacts" | "footer";
  className?: string;
};

type Socials = "facebook" | "instagram";

export const SocNav: React.FC<Props> = ({ location, className = "" }) => {
  const { socLinks } = data;

  const getIcon = (icon: Socials) => {
    switch (icon) {
      case "facebook":
        return <IconFacebook className="w-6 h-6" />;
      case "instagram":
        return <IconInstagram className="w-6 h-6" />;
      default: {
        console.log("Error: this type of icon is not supported");
        return <></>;
      }
    }
  };

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socLinks.map(({ label, path }) => {
        return (
          <li key={label}>
            <Link
              href={path}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`
                    hover:text-green-secondary focus:text-green-secondary transition_prop
              ${
                location === "contacts"
                  ? "w-12 h-12 flex items-center justify-center"
                  : ""
              }`}
              aria-label={`Link to ${label}`}
            >
              {getIcon(label.toLowerCase() as Socials)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
