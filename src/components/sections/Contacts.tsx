import Link from "next/link";

import { ContactForm, Container, SocNav } from "@components";

import IconPhone from "../../../public/icons/icon-phone.svg";
import IconMail from "../../../public/icons/icon-sms.svg";
import IconMap from "../../../public/icons/icon-map.svg";

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="section">
      <Container>
        <h2 className="text-section-title text-center mb-6 md:mb-10 xl:mb-[120px]">
          Contact us
        </h2>

        <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">
          <address className="not-italic">
            <ul className="flex flex-col gap-6 xl:gap-8">
              <li>
                <p className="text-contact-label mb-2 xl:mb-4">Phone:</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="tel:38 (098) 12 34 567"
                      className="group flex items-center gap-2 text-contact-data"
                    >
                      <IconPhone className="w-6 h-6 group-hover:text-green-secondary group-focus:text-green-secondary transition_prop" />
                      38 (098) 12 34 567
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:38 (093) 12 34 567"
                      className="group flex items-center gap-2 text-contact-data"
                    >
                      <IconPhone className="w-6 h-6 group-hover:text-green-secondary group-focus:text-green-secondary transition_prop" />
                      38 (093) 12 34 567
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <p className="text-contact-label mb-2 xl:mb-4">E-mail:</p>
                <Link
                  href="mailto:office@ecosolution.com"
                  className="group flex items-center gap-2 text-contact-data"
                >
                  <IconMail className="w-6 h-6 group-hover:text-green-secondary group-focus:text-green-secondary transition_prop" />
                  office@ecosolution.com
                </Link>
              </li>

              <li>
                <p className="text-contact-label mb-2 xl:mb-4">Address:</p>
                <div className="flex items-center gap-2 text-contact-data">
                  <IconMap className="w-6 h-6" />
                  <p className="leading-[1.2]">
                    <span>79005, Ukraine, Lvivstreet.</span>
                    <br className="xl:hidden" />
                    Shota Rustaveli, 7
                  </p>
                </div>
              </li>

              <li>
                <p className="text-contact-label mb-2 xl:mb-4">
                  Social Networks:
                </p>
                <SocNav location="contacts" />
              </li>
            </ul>
          </address>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
