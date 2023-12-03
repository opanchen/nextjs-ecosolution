import Image from "next/image";

import data from "../data/values.json";

import IconCircle from "../../public/icons/icon-circle.svg";
import IconGlobus from "../../public/icons/icon-globus.svg";
import IconCharge from "../../public/icons/icon-charge.svg";
import IconRanking from "../../public/icons/icon-ranking.svg";

type IconType = "circle" | "globus" | "charge" | "ranking";

const getIcon = (icon: IconType) => {
  switch (icon) {
    case "circle":
      return <IconCircle className="w-6 h-6" />;
    case "globus":
      return <IconGlobus className="w-6 h-6" />;
    case "charge":
      return <IconCharge className="w-6 h-6" />;
    case "ranking":
      return <IconRanking className="w-6 h-6" />;
    default: {
      console.log("Error...");
      return <></>;
    }
  }
};

export const ValuesGrid: React.FC = () => {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-6 xl:gap-[48px]">
      {[...data.values]
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          return item.pathLabel ? (
            <li key={item.order} className="hidden md:block col-span-2">
              <Image
                className="object-cover object-center h-full w-full"
                src={`/images/values/${item.pathLabel}`}
                alt={item.alt}
                width={604}
                height={404}
              />
            </li>
          ) : (
            <li
              key={item.order}
              className="h-[197px] xl:h-[339px] pt-3 px-3 bg-gray-primary"
            >
              <div className="value-card-top relative flex items-center gap-2 pb-[34px] md:pb-[51px] xl:pb-[94px] mb-3 xl:mb-6">
                {getIcon(item.text?.icon as IconType)}
                <h3 className="font-oswald text-[16px] leading-[1.5] md:text-[18px] md:leading-[1.333] xl:text-[32px] xl:leading-[1.5] uppercase">
                  {item.text?.title}
                </h3>
              </div>
              <p className="text-[14px] tracking-[-0.56px] text-justify xl:text-[16px] xl:tracking-[-0.64] leading-[1.2]">
                {item.text?.desc}
              </p>
            </li>
          );
        })}
    </ul>
  );
};
