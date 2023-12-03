"use client";

import { useEffect, useState } from "react";

import { convertNumToStr } from "@utils/helpers";

export const Counter: React.FC = () => {
  const [num, setNum] = useState(1134147814);

  useEffect(() => {
    setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-6">
      <p className="font-oswald font-bold uppercase text-[48px] leading-none text-green-secondary md:text-[100px] xl:text-[164px]">
        {convertNumToStr(num)}
      </p>
      <span className="inline-block font-oswald text-[24px] leading-none md:text-[28px] md:leading-[1.714] xl:text-[48px] xl:leading-none">
        kWh
      </span>
    </div>
  );
};
