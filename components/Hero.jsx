import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex  items-center justify-center  h-screen  custom-bg">
      <div className="container flex flex-col md:flex-row justify-between text-white px-16 py-24 md:px-12">
        <div className="my-auto">
          <h2 className="font-bold text-4xl  md:text-6xl md:leading-[92px] font-sans ">
            I'M
            <span className="text-yellow-500 text-6xl ">
              <Typewriter
                options={{
                  strings: ["Al-Amin", "ReactJS Developer"],
                  autoStart: true,
                  loop: true,
                  cursorStyle: ".",
                }}
              />
            </span>
            A Web Developer
          </h2>
          <button className="border px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 font-bold text-sm md:text-l tracking-widest  rounded-2xl uppercase text-black bg-yellow-500 hover:bg-black hover:text-yellow-500 hover:border ease-in-out duration-500">
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
        <Image
          src="/../public/assets/hero.jpg"
          width={500}
          height={500}
          alt=""
          className="rounded-full max-w-[550px] max-h-[550px]"
        />
      </div>
    </div>
  );
};

export default Hero;
