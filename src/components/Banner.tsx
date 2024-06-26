import { useEffect, useState } from "react";
import Plane from "../assets/plane.gif";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web Developer", "Mobile Developer", "Voyager"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="home-banner">
      <div>
        <section className="mx-auto text-white  text-center">
          <img src={Plane} className="mx-auto" />
          <p className="title font-[Sacramento] md:text-8xl text-5xl mt-5">
            Abhishek P S
          </p>
          <br />
          <p className="md:text-4xl text-2xl mt-4 flex justify-center">
            I am a
            <span className="mx-2 font-bold">
              <TextTransition springConfig={presets.stiff}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>
          </p>
          <br />
          <a
            href="#chatWithMe"
            className="btn bg-[#41b0bf] text-white rounded-full"
          >
            Chat with me
          </a>
        </section>
      </div>
    </div>
  );
};

export default Banner;
