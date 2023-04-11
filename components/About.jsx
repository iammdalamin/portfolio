import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <div
      id="about"
      className="w-full container mx-auto px-10 py-24 flex flex-col-reverse md:flex-row  justify-between gap-16"
    >
      <motion.div
        initial={{
          x: -100,
        }}
        whileInView={{
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        className="w-full md:w-1/2"
      >
        <h2 className="section-title  mb-4 text-3xl md:text-4xl text-white ">
          About Me
        </h2>
        <p className="  md:text-lg text-md leading-8 ">
          Hello! My name is Md. Al-Amin and I enjoy creating things that live on
          the internet. My interest in web development started back in 2019 when
          I decided to try editing localpress theme — turns out hacking together
          a custom rig element taught me a lot about HTML & CSS! Fast-forward to
          today, and I’ve had the privilege of working at codember.com, a
          start-up, a huge corporation, and a student-led design studio. My main
          focus these days is building accessible, inclusive products and
          digital experiences at Upstatement for a variety of clients.
        </p>
        <button className=" px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 font-bold text-sm md:text-l tracking-widest  rounded-md border-[1px] border-[#64ffda] uppercase text-[#64ffda] bg-transparent hover:bg-[#64ffdb31] hover: ease-in-out duration-500">
          Download My Resume{" "}
        </button>
      </motion.div>
      {/* <div className="w-full md:w-1/2">
        <h2 className="section-title   mb-4 text-3xl md:text-4xl text-white ">
          Experience
        </h2>
        <div className=" text-white">
          <h3 className="text-xl text-gray-400">CODEMBER.COM</h3>
          <span>Wordpress Theme development</span>
          <ul>
            <li>
              <HiOutlineCheckCircle size={25} /> Customise localpress theme.
            </li>
            <li>Design with elementor.</li>
            <li>Create rig elements with html and css.</li>
          </ul>
        </div>
      </div> */}

      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <motion.div
          initial={{
            x: 100,
          }}
          whileInView={{
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          className="bg-white rounded-xl "
        >
          <Image
            src="https://i.postimg.cc/15r34VPV/Picsart-23-04-11-12-42-12-111.png"
            alt="My Image"
            width={300}
            height={350}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
