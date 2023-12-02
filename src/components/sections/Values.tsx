import { Container, ValuesGrid } from "@components";

export const Values: React.FC = () => {
  return (
    <section id="values" className="section">
      <Container>
        <div className="outline-dashed flex flex-col gap-9 md:gap-[100px] xl:gap-[120px]">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-0">
            <h2 className="text-section-title">
              <span>Main values of </span>
              <br className="hidden md:block" />
              <span>our </span>
              <br className="md:hidden" />
              company
            </h2>

            <p className="values-desc relative md:w-[342px] xl:w-[460px] text-[16px] tracking-[-0.64px] text-justify">
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world&apos;s energy needs.
            </p>
          </div>
          <ValuesGrid />
        </div>

        {/* <div className="w-full h-screen bg-slate-200"></div> */}
      </Container>
    </section>
  );
};
