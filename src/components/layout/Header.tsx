import { AppBar, Container, Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <header className="fixed z-10 top-0 left-0 right-0 pt-9 pb-4 xl:pt-6 bg-white-primary outline-dashed outline-red-600">
      <Container>
        <div className="w-full flex items-center justify-between">
          <Logo />
          <AppBar />
        </div>
      </Container>
    </header>
  );
};
