import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex  items-center justify-center  h-screen  bg-gradient-to-r from-violet-500 to-fuchsia-500  anime-bg py-[30rem] md:p-0">
      <div className="container flex flex-col md:flex-row justify-between text-white px-16 py-24 md:px-12">
        <div className="my-auto pb-10 w-100 md:w-[60%]">
          <h2 className="font-bold text-4xl  md:text-6xl md:leading-[92px] font-sans ">
            Im
            <span className="text-slate-800	text-4xl	 md:text-6xl ">
              <Typewriter
                options={{
                  strings: ["Al-Amin", "MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                }}
              />
            </span>
          </h2>
          <button className=" px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 font-bold text-sm md:text-l tracking-widest  rounded-2xl uppercase text-black bg-white hover:bg-black hover:text-white hover: ease-in-out duration-500">
            Projects
          </button>
        </div>
        {/* <Image
            src="/../public/assets/hero.jpg
              "
            alt=""
            width="350px"
            height="350px"
            objectFit
            className="rounded-full sm:w-[350px] sm:h-[350px] sm:mt-4 md:w-full md:h-full z-[1]"
          /> */}
        <div
          className="w-100 md:w-[40%] rounded-full shadow-2xl flex justify-center "
          width={500}
          height={500}
        >
          <Image
            src="https://i.postimg.cc/134KScV1/hero.jpg"
            width={500}
            height={500}
            alt=""
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
