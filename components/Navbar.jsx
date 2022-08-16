import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const style = {
  navbar: `w-full mx-auto fixed h-10 border border-gray-400 flex flex-row justify-between items-center px-10 py-7 text-white z-999`,
  navTitle: `font-bold cursor-pointer`,
};
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  console.log(nav);
  return (
    <div className="relative">
      <nav className={style.navbar}>
        <div>
          <Link href="/">
            <p className={style.navTitle}>Hime.Dev</p>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex justify-between items-center flex-wrap ">
            <li className="nav-link px-3 hover:border-b border-[#FEC60A]">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link px-3 hover:border-b border-[#FEC60A]">
              <Link href="/">Projects</Link>
            </li>
            <li className="nav-link px-3 hover:border-b border-[#FEC60A]">
              <Link href="/">About</Link>
            </li>
            <li className="nav-link px-3 hover:border-b border-[#FEC60A]">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="block md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </div>
      </nav>
      {/* overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* mobile menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              : "fixed left-[-100%] h-screen w-full  top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <p className="font-bold cursor-pointer">Hime.Dev</p>
            </Link>
            <div
              onClick={handleNav}
              className="border border-black rounded-full p-2 cursor-pointer block"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let&#39;s build something legendary together
            </p>
          </div>
          <div>
            <ul className="flex flex-col md:hidden justify-start items-start flex-wrap w-full">
              <li className="nav-link py-5 font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-link py-5 font-bold">
                <Link href="/">Projects</Link>
              </li>
              <li className="nav-link py-5 font-bold">
                <Link href="/">About</Link>
              </li>
              <li className="nav-link py-5 font-bold">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <ul className="flex justify-between">
              <li className="border border-black rounded-full p-3 bg-black text-yellow-500 shadow-xl hover:bg-yellow-500 hover:text-black anime-ico">
                <Link href="/">
                  <FaFacebookF size={18} />
                </Link>
              </li>
              <li className="border border-black rounded-full p-3 bg-black text-yellow-500 shadow-xl hover:bg-yellow-500 hover:text-black anime-ico">
                <Link href="/">
                  <FaLinkedinIn size={18} />
                </Link>
              </li>

              <li className="border border-black rounded-full p-3 bg-black text-yellow-500 shadow-xl hover:bg-yellow-500 hover:text-black anime-ico">
                <Link href="/">
                  <FaGithub size={18} />
                </Link>
              </li>
              <li className="border border-black rounded-full p-3 bg-black text-yellow-500 shadow-xl hover:bg-yellow-500 hover:text-black anime-ico">
                <Link href="/">
                  <FaGithub size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
