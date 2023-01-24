import React from "react";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <div className="flex flex-col  items-center justify-center py-6 relative">
      <SocialIcons />
      <br />
      <span className="block font-light text-sm text-[#a8b2d1]">
        Designed & Built by Md Al-Amin
      </span>
    </div>
  );
};

export default Footer;
