import { Cases, Electricity, Hero, Values } from "@components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <Electricity />
      <Cases />
    </>
  );
};

export default Home;
