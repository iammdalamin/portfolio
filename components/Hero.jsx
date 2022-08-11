import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen custom-img">
        <div className="max-w-[1240px] w-full flex flex-row justify-between">
          <div>
            <h2 className="font-bold text-6xl">Headings</h2>
            <p>Message</p>
            <button>Book</button>
          </div>
          <div>
            <Image
              src="/../public/assets/PicsArt_08-11-07.12.36.png"
              alt=""
              width="550px"
              height="550px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
