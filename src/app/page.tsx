import { Cases, Electricity, FAQ, Hero, Values } from "@components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
    </>
  );
};

export default Home;
