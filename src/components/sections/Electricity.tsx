import { Container, Counter } from "@components";

export const Electricity: React.FC = () => {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-center gap-[96px] md:gap-[135px] xl:gap-[120px]">
          <h2 className="electricity-title relative text-section-title text-center">
            Electricity we produced <br /> for all time
          </h2>

          <Counter />
        </div>
      </Container>
    </section>
  );
};
