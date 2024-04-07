import DownloadIcon from "../assets/download-icon.webp";
import MyResume from "../assets/Abhishek_PS_Resume_compressed.pdf";
import ReactGA from "react-ga";
import { useCallback } from "react";

function Resume() {
  const handleResumeClick = useCallback(() => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Download Resume Button",
    });
  }, []);

  return (
    <div className="text-center mt-[3rem] mb-5">
      <h2 className="text-4xl font-thin">Download my Resume</h2>
      <div className="w-[5rem] mx-auto hover:scale-110 cursor-pointer">
        <a href={MyResume} download onClick={handleResumeClick}>
          <img src={DownloadIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
