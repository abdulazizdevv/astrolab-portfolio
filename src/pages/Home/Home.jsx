import { About } from "src/modules/About/About";
import { Main } from "src/modules/Main";
import { Portfolio } from "src/modules/Portfolio";
import { Services } from "src/modules/Services";
import TestAbout from "src/modules/TestAbout/TestAbout";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Main />
      <TestAbout />
      <About />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Home;
