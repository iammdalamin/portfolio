import React from "react";

const Hero = () => {
  return (
    <div className="flex  items-center justify-center  h-screen md:h-screen  bg-[#0A192F]  py-[30rem] md:p-0">
      <div className="container flex flex-col md:flex-row justify-between text-white px-10 py-24 md:px-12">
        <div className="my-auto pb-10 w-100 md:w-[80%]">
          <span className="text-[#64ffda] mb-8 text-lg md:text-xl">
            Hi, my name is
          </span>
          <h2 className="text-[#ccd6f6]	font-bold text-4xl  md:text-6xl md:leading-[1.1] font-sans ">
            Md. Al-Amin
          </h2>
          <h2 className="text-[#8892b0]	font-bold text-4xl  md:text-6xl md:leading-[92px] font-sans leading-[1.1]	">
            I build things for the web.
          </h2>
          <p className="block text-md md:text-lg w-100 md:w-[65%] leading-6">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <button className=" px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 font-bold text-sm md:text-l tracking-widest  rounded-md border-[1px] border-[#64ffda] uppercase text-[#64ffda] bg-transparent hover:bg-[#64ffdb31] hover: ease-in-out duration-500">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
