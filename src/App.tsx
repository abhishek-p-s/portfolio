import { useEffect, Fragment } from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import FooterImage from "./assets/foot.jpg";
import Skill from "./assets/skill.avif";
import AOS from "aos";
import ReactGA from "react-ga";
import {
  About,
  Banner,
  Count,
  Footer,
  QuoteSlider,
  Resume,
} from "./components";

ReactGA.initialize("G-02Z556HRZH");

function App() {
  useEffect(() => {
    AOS.init();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Fragment>
      <Banner />
      <About />
      <hr className="w-[70%] mx-auto" />
      <Count />
      <div className="text-center mt-[3rem] mb-5">
        <h2 className="text-4xl font-thin">Skills</h2>
        <div>
          <img src={Skill} alt="" className="md:w-[70%] w-full mx-auto" />
        </div>
      </div>
      <Resume />
      <QuoteSlider />
      <Footer />
      <div>
        <img src={FooterImage} alt="" className="mx-auto" />
      </div>
    </Fragment>
  );
}

export default App;
