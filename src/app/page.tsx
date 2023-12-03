import {
  Cases,
  Contacts,
  Electricity,
  FAQ,
  Hero,
  Values,
} from "@components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
      <Contacts />
    </>
  );
};

export default Home;
