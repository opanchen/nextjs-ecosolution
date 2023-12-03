import { AnchorBtn, Container } from "@components";

const NotFound = () => {
  return (
    <section className="h-[85vh] pt-[222px] md:pt-[240px] xl:pt-[264px] font-fira-sans bg-white-primary ">
      <Container>
        <div className="flex flex-col gap-9">
          <h1 className="text-section-title">404 Not Found</h1>

          <div className="w-full md:self-end md:w-1/2 flex flex-col items-center gap-6">
            <p>
              <span>We could not find the page you were looking for. </span>
              <br /> Please follow the link below and go to the start...
            </p>

            <AnchorBtn label="Continue" path="/" className="inline-flex" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
