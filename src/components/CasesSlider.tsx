"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

import { useWindowDimensions } from "@utils/hooks";
import { addLeadingZero } from "@utils/helpers";

import data from "../data/gallery.json";

import IconArrowTopRight from "../../public/icons/icon-arrow-right-up.svg";
import IconPrev from "../../public/icons/icon-prev.svg";
import IconNext from "../../public/icons/icon-next.svg";
import Link from "next/link";

export const CasesSlider: React.FC = () => {
  const { gallery } = data;

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const { width } = useWindowDimensions();

  const slidesQty = width && width >= 768 ? 2 : 1;
  const gap = width && width >= 1280 ? 48 : 24;

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.realIndex);
  };

  const getCurrentNumber = () => {
    if (slidesQty === 1) return activeSlide + 1;

    return activeSlide === 4 ? 5 : activeSlide + 2;
  };

  const current = getCurrentNumber();

  return (
    <div>
      {/* Navigation bar */}
      <div className="flex items-end justify-between smOnly:mb-5 md:justify-start md:gap-[126px] xl:gap-[194px] md:absolute md:top-[12px] md:right-0 xl:top-[17px]">
        <p className="font-light text-[28px] text-justify tracking-[-1.12px] leading-none">
          {addLeadingZero(current)}{" "}
          <span className="text-green-alpha-25">
            /{addLeadingZero(gallery.length)}
          </span>
        </p>

        <div className="flex items-center gap-3 xl:gap-6 translate-y-[-7px]">
          <button
            type="button"
            className="slider-nav-btn prev"
            aria-label="Previous slide"
          >
            <IconPrev className="w-9 h-9" />
          </button>
          <button
            type="button"
            className="slider-nav-btn next"
            aria-label="Next slide"
          >
            <IconNext className="w-9 h-9" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        ref={sliderRef}
        onInit={(core: SwiperCore) => {
          sliderRef.current = core.el;
        }}
        modules={[Navigation, Autoplay, A11y]}
        slidesPerView={slidesQty}
        spaceBetween={gap}
        grabCursor
        loop={true}
        speed={1000}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {gallery.map((item, index) => {
          const { location, desc, enterprize, date, imagePath, url } = item;

          return (
            <SwiperSlide key={index}>
              <article className="w-full md:w-[342px] xl:w-[596px] bg-gray-primary">
                <div className="block w-full h-[168px] xl:h-[296px]">
                  <Image
                    className="object-cover object-center w-full h-full"
                    src={`/images/gallery/${imagePath}.jpg`}
                    alt={desc}
                    width={596}
                    height={296}
                    sizes="(max-width: 767px) 100vw, 596px"
                    priority
                  />
                </div>

                <div className="pt-6 pb-3 xl:py-9 px-3 xl:px-12 flex flex-col gap-3 xl:gap-6">
                  <div className="slide-cart-top relative flex items-center justify-between pb-[21px] md:pb-4 xl:pb-9">
                    <h3 className="w-[175px] md:w-[194px] xl:w-[357px] text-[18px] tracking-[-0.72px] text-justify md:text-[20px] md:tracking-[-0.8px] xl:text-[24px] xl:tracking-[-0.96px] leading-none">
                      <span>{location}</span>
                      <br className="hidden xl:block" />{" "}
                      <span className="text-left">{enterprize}</span>
                    </h3>

                    <Link
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="View details about the enterprize"
                      className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-green-secondary hover:bg-green-primary focus:bg-green-primary hover:text-green-secondary focus:text-green-secondary transition_prop"
                    >
                      <IconArrowTopRight className="w-7 h-7" />
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-[12px] tracking-[-0.48px] md:text-[14px] md:tracking-[-0.56px] xl:text-[16px] xl:tracking-[-0.64px]">
                    <p className="text-justify">{desc}</p>
                    <p>{date}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
