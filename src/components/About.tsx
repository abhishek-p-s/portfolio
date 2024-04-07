import profilePhoto from "../assets/abhishek.jpeg";

function About() {
  return (
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
          crafting robust and scalable applications that push the boundaries of
          technology. With extensive experience in full-stack development, I
          thrive on architecting innovative solutions that blend cutting-edge
          front-end technologies with powerful back-end frameworks. currently
          working with{" "}
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
  );
}

export default About;
