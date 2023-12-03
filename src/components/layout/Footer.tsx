import Link from "next/link";

import { Container, Logo, SocNav, TopScrollBtn } from "@components";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white-primary font-fira-sans">
      <Container>
        <div className="relative footer-inner py-6 md:py-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Logo />
            <TopScrollBtn />
          </div>

          <address className="not-italic flex flex-col items-center gap-6 md:gap-4">
            <SocNav
              location="footer"
              className="md:absolute top-11 right-[286px] xl:right-[404px] md:translate-y-[4px]"
            />

            <ul className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
              <li>
                <p className="text-contact-label">
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </p>
              </li>

              <li>
                <Link
                  href="mailto:office@ecosolution.com"
                  className="text-contact-label md:absolute md:bottom-10 md:right-[180px] xl:right-[296px] hover:text-green-secondary focus:text-green-secondary transition_prop"
                >
                  office@ecosolution.com
                </Link>
              </li>

              <li>
                <p className="text-contact-label">ecosolution © 2023</p>
              </li>
            </ul>
          </address>
        </div>
      </Container>
    </footer>
  );
};
