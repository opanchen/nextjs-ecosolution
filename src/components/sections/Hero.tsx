import { AnchorBtn, Container, HeroImage } from "@components";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="pt-[222px] pb-9 md:pb-[100px] xl:pb-[120px] md:pt-[240px] xl:pt-[264px] font-fira-sans">
      <Container>
        <div className="outline-dashed">
          <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between mb-6 md:mb-[26px] xl:mb-[28px]">
            <h1 className="font-oswald text-[36px] md:text-[48px] xl:text-[64px] leading-none uppercase text-green-primary">
              <span>Renewable </span>
              <br className="hidden md:block xl:hidden" />
              <span>energy </span>
              <br className="md:hidden xl:block" />
              <span>for </span>
              <br className="hidden md:block xl:hidden" />
              <span>any task</span>
            </h1>

            <div className="md:w-[342px] xl:w-[363px] flex flex-col gap-6 md:gap-[42px] xl:gap-5 xl:mr-[96px]">
              <p className="text-[16px] tracking-[-0.64px] smOnly:text-justify">
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </p>

              <div className="inline-flex smOnly:self-center">
                <AnchorBtn label="Learn more" path="#cases" location="hero" />
              </div>
            </div>
          </div>

          <address className="hero-address relative z-0 flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between items-center pt-6 md:pt-4 xl:pt-3 mb-9 md:mb-10 xl:mb-9  text-[16px] tracking-[-0.64px] not-italic">
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>

            <Link href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </Link>

            <p className="hidden md:block ">ecosolution © 2023</p>
          </address>

          <HeroImage />
        </div>
      </Container>
    </section>
  );
};
