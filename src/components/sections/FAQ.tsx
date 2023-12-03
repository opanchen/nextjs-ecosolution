import { AnchorBtn, Container, InfoAccordion } from "@components";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section">
      <Container>
        <div className="relative smOnly:pb-[110px] flex flex-col gap-6 md:flex-row-reverse md:justify-end xl:gap-[186px]">
          <div className="md:flex flex-col justify-between grow">
            <h2 className="text-section-title">
              Frequently Asked <br /> Questions
            </h2>

            <div className="smOnly:absolute bottom-0 left-1/2 smOnly:translate-x-[-50%] flex flex-col gap-3 items-center md:mb-4 xl:mb-6">
              <p className="w-[280px] preSm:w-[300px] md:w-auto text-[18px] tracking-[-0.72px] text-justify xl:text-[24px] xl:tracking-[-0.96px]">
                {"Didn't find the answer to your question?"}
              </p>

              <AnchorBtn
                label="Contact Us"
                path="#contacts"
                className="inline-flex"
              />
            </div>
          </div>

          <InfoAccordion className="w-full md:w-[342px] xl:w-[596px]" />
        </div>
      </Container>
    </section>
  );
};
