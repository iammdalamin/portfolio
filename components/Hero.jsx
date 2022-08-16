import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen sm:px-16 custom-img">
        <div className="max-w-[1240px] w-full flex flex-col md:flex-row justify-between text-white">
          <div>
            <h2 className="font-bold text-6xl font-sans">
              I'M
              <span className="text-yellow-500 font-bold"> Al-Amin</span>
              <br />A Web Developer
            </h2>
            <button className="border px-10 py-3 mt-10 font-bold text-l tracking-widest  rounded-2xl uppercase text-black bg-yellow-500 hover:bg-black hover:text-yellow-500 hover:border ease-in-out duration-500">
              Projects
            </button>
          </div>
          <div>
            <Image
              src="/../public/assets/hero.jpg
              "
              alt=""
              width="550px"
              height="550px"
              className="rounded-full bg-cover sm:w-[350px] sm:h-[350px] z-[-1]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
