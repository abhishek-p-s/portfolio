function Footer() {
  return (
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
  );
}

export default Footer;
