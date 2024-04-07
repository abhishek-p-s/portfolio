import { Fragment } from "react/jsx-runtime";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Plane from "./assets/plane.gif";
import profilePhoto from "./assets/abhishek.jpeg";
import Billgates from "./assets/bill-gates.jpg";
import LinusTorvalds from "./assets/linus-torvalds.jpg";
import LarryPage from "./assets/larry-page.jpg";
import SteveJobs from "./assets/steve-jobs.jpg";
import DownloadIcon from "./assets/download-icon.webp";
import FooterImage from "./assets/foot.jpg";
import Skill from "./assets/skill.avif";
import Resume from "./assets/Abhishek_PS_Resume_compressed.pdf";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";

const TEXTS = ["Web Developer", "Mobile Developer", "Voyager"];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleResumeClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Download Resume Button",
    });
  };

  return (
    <Fragment>
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
              Chatt with me
            </a>
          </section>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center p-5 mt-5 mx-auto w-[70%]">
        <div className="mx-5">
          <img
            src={profilePhoto}
            alt="abhishek-profile-photo"
            className="rounded-full"
          />
          <div className="flex justify-around mt-5 text-[#41b0bf]">
            <a
              href="https://in.linkedin.com/in/abhishek-p-s-83a2311b6?trk=public_profile_browsemap"
              target="_blank"
            >
              <i className="fa fa-linkedin text-3xl text-[#41b0bf]"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009612692029"
              target="_blank"
            >
              <i className="fa fa-facebook text-3xl text-[#41b0bf]"></i>
            </a>
            <a
              href="https://www.instagram.com/___abhishek___p_s_/"
              target="_blank"
            >
              <i className="fa fa-instagram text-3xl text-[#41b0bf]"></i>
            </a>
            <a href="https://github.com/abhishek-p-s" target="_blank">
              <i className="fa fa-github text-3xl text-[#41b0bf]"></i>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-center mt-3 md:text-left md:mt-0 font-thin">
            About me
          </h1>
          <p className="text-[#838383] mt-3 text-justify">
            Hi, I am a senior software engineer with a deep-rooted passion for
            crafting robust and scalable applications that push the boundaries
            of technology. With extensive experience in full-stack development,
            I thrive on architecting innovative solutions that blend
            cutting-edge front-end technologies with powerful back-end
            frameworks. currently working with{" "}
            <a
              href="https://six30labs.io/"
              target="_blank"
              className="border-b-2"
            >
              six30labs
            </a>
          </p>
        </div>
      </div>
      <hr className="w-[70%] mx-auto" />
      <div className="flex justify-between md:flex-row flex-col mx-auto w-[70%] mt-5">
        <div className="flex justify-center items-center flex-col">
          <h4 className="text-[#41b0bf] font-bold text-3xl" data-aos="fade-up">
            160 000+
          </h4>
          <span className="text-xl mt-3" data-aos="fade-up">
            lines of code
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4 className="text-[#41b0bf] font-bold text-3xl" data-aos="fade-up">
            301 783 509+
          </h4>
          <span className="text-xl mt-3" data-aos="fade-up">
            pixels rendered
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4 className="text-[#41b0bf] font-bold text-3xl" data-aos="fade-up">
            20+
          </h4>
          <span className="text-xl mt-3" data-aos="fade-up">
            projects completed
          </span>
        </div>
      </div>

      <div className="text-center mt-[3rem] mb-5">
        <h2 className="text-4xl font-thin">Skills</h2>
        <div>
          <img src={Skill} alt="" className="md:w-[70%] w-full mx-auto" />
        </div>
      </div>

      <div className="text-center mt-[3rem] mb-5">
        <h2 className="text-4xl font-thin">Download my Resume</h2>
        <div className="w-[5rem] mx-auto hover:scale-110 cursor-pointer">
          <a href={Resume} download onClick={handleResumeClick}>
            <img src={DownloadIcon} alt="" />
          </a>
        </div>
      </div>

      <div className="mt-5 p-5">
        <div className="bg-[#e55c4c] mx-auto p-5">
          <h1 className="text-white text-4xl font-thin text-center mt-5">
            Inspiring Quotes
          </h1>
          <Swiper
            //spaceBetween={50}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Navigation]}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center w-full p-5 mt-5">
                <div className="mt-5">
                  <img src={Billgates} alt="" className="rounded-full" />
                </div>
                <div className="mt-5">
                  <p className="text-white text-2xl font-serif">
                    " Success is a lousy teacher. It seduces smart people into
                    thinking they can't lose. "
                  </p>
                  <p className="text-center text-white">
                    by <span className="font-bold">Bill Gates</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex flex-col justify-center items-center w-full p-5 mt-5">
                <div className="mt-5">
                  <img src={LinusTorvalds} alt="" className="rounded-full" />
                </div>
                <div className="mt-5">
                  <p className="text-white text-2xl font-serif">
                    "See, you not only have to be a good coder to create system
                    like Linux, you have to be a sneaky bastard too. "
                  </p>
                  <p className="text-center text-white">
                    by <span className="font-bold"> Linus Torvalds</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex flex-col justify-center items-center w-full p-5 mt-5">
                <div className="mt-5">
                  <img src={LarryPage} alt="" className="rounded-full" />
                </div>
                <div className="mt-5">
                  <p className="text-white text-2xl font-serif">
                    " If you're changing the world, you're working on important
                    things. You're excited to get up in the morning. "
                  </p>
                  <p className="text-center text-white">
                    by <span className="font-bold">Larry Page</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex flex-col justify-center items-center w-full p-5 mt-5">
                <div className="mt-5">
                  <img src={SteveJobs} alt="" className="rounded-full" />
                </div>
                <div className="mt-5">
                  <p className="text-white text-2xl font-serif">
                    " Because the people who are crazy enough to think they can
                    change the world are the ones who do. "
                  </p>
                  <p className="text-center text-white">
                    by <span className="font-bold">Steve Jobs</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mt-5 p-5" id="chatWithMe">
        <h1 className="text-4xl text-center font-thin">Chatt with me</h1>
        <p className="text-center text-gray-400 mt-5 text-xl">
          I am always excited to work on some awesome projects, message me and
          let's discuss over a coffee.
        </p>
        <div className="mx-auto md:w-[60%] w-full mt-5">
          <form className="flex flex-col justify-center items-center">
            <div className="flex md:flex-row flex-col justify-center w-full">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="ml-5 mt-4 md:mt-0 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="mt-5 w-full">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white">Submit</button>
            </div>
          </form>
        </div>

        <div className="mt-5 flex md:flex-row flex-col justify-around items-center align-middle">
          <p className="text-center text-gray-400" data-aos="fade-up">
            <b>
              No <i className="fa fa-copyright"></i> copyright issues.
            </b>
            <br />
            Feel free to copy. If you need any help, ping me !
          </p>
          <p
            className="title font-[Sacramento] text-4xl mt-5 text-[#41b0bf]"
            data-aos="fade-up"
          >
            Abhishek P S
          </p>
          <div className="md:w-[20%] w-full" data-aos="fade-up">
            <p className="text-center text-gray-400">
              You can find me everywhere
            </p>
            <div>
              <div className="flex justify-around mt-5 text-[#41b0bf]">
                <a
                  href="https://in.linkedin.com/in/abhishek-p-s-83a2311b6?trk=public_profile_browsemap"
                  target="_blank"
                >
                  <i className="fa fa-linkedin text-3xl text-[#41b0bf]"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009612692029"
                  target="_blank"
                >
                  <i className="fa fa-facebook text-3xl text-[#41b0bf]"></i>
                </a>
                <a
                  href="https://www.instagram.com/___abhishek___p_s_/"
                  target="_blank"
                >
                  <i className="fa fa-instagram text-3xl text-[#41b0bf]"></i>
                </a>
                <a href="https://github.com/abhishek-p-s" target="_blank">
                  <i className="fa fa-github text-3xl text-[#41b0bf]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={FooterImage} alt="" className="mx-auto" />
      </div>
    </Fragment>
  );
}

export default App;
