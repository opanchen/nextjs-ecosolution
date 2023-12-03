"use client";

import { useState } from "react";

import data from "../data/faq.json";

import IconPlus from "../../public/icons/icon-plus.svg";
import IconMinus from "../../public/icons/icon-minus.svg";

type Props = {
  className?: string;
};

export const InfoAccordion: React.FC<Props> = ({ className = "" }) => {
  const { faq } = data;

  const [activeElement, setActiveElement] = useState<number | null>(faq[0].id);

  const handleClick = (id: number) => {
    if (id === activeElement) {
      setActiveElement(null);
    } else {
      setActiveElement(id);
    }
  };

  return (
    <div className={`${className}`}>
      <ul>
        {faq.map(({ id, question, answer }) => {
          return (
            <li key={id} className="border-t-[1px] border-t-green-secondary">
              <button
                className="w-full flex items-center gap-2 md:gap-4 xl:gap-6 py-4 xl:py-6 hover:bg-green-secondary/5 focus:bg-green-secondary/5 transition_prop"
                type="button"
                onClick={() => handleClick(id)}
              >
                <span className="inline-block">
                  {activeElement === id ? (
                    <IconMinus className="w-4 h-4 md:w-7 md:h-7" />
                  ) : (
                    <IconPlus className="w-4 h-4 md:w-7 md:h-7 text-green-secondary" />
                  )}
                </span>

                <span className="inline-block text-justify text-[18px] tracking-[-0.72px] xl:text-[24px] xl:tracking-[-0.96px] leading-[1.2]">
                  {question}
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition_prop ${
                  activeElement === id
                    ? "grid-rows-[1fr] opacity-100 pb-4 xl:pb-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden pl-6 md:pl-[44px] xl:pl-[52px] text-[14px] text-justify tracking-[-0.56px] xl:text-[16px] xl:tracking-[-0.64px]">
                  {answer}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
