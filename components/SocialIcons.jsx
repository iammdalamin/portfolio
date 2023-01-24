import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-6 w-auto h-auto  fixed bottom-0 left-10 after:content after:w-[2px] after:h-40 after:bg-[#a8b2d1] after:mx-auto">
      <i className="text-[#a8b2d1] ">
        <FiGithub size={25} />
      </i>
      <i className="text-[#a8b2d1] ">
        <AiOutlineInstagram size={25} />
      </i>
      <i className="text-[#a8b2d1] ">
        <AiOutlineTwitter size={25} />
      </i>
      <i className="text-[#a8b2d1] ">
        <FaLinkedinIn size={25} />
      </i>
    </div>
  );
};

export default SocialIcons;
