import { CasesSlider, Container } from "@components";

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="section">
      <Container>
        <div className="relative flex flex-col gap-6 md:gap-[38px] xl:gap-[120px]">
          <h2 className="text-section-title cases-heading">
            <span>Successful cases </span>
            <br className="hidden md:block" />
            <span>of </span>
            <br className="md:hidden" />
            our company
          </h2>

          <CasesSlider />
        </div>
      </Container>
    </section>
  );
};
