import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="relative">
      {" "}
      <nav className=" w-full mx-auto fixed h-10 border border-gray-400 flex flex-row justify-between items-center px-10 py-7 text-white">
        <div>
          <Link href="/">
            <p className="font-bold cursor-pointer">Hime.Dev</p>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex justify-between items-center flex-wrap ">
            <li className="nav-link px-5 hover:border-b border-[#FEC60A]">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link px-5 hover:border-b border-[#FEC60A]">
              <Link href="/">Projects</Link>
            </li>
            <li className="nav-link px-5 hover:border-b border-[#FEC60A]">
              <Link href="/">About</Link>
            </li>
            <li className="nav-link px-5 hover:border-b border-[#FEC60A]">
              <Link href="/">Contatc</Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </nav>
      {/* mobile menu */}
      <div className="flex md:hidden  absolute left-0 right-0 w-[45%] h-screen bg-white shadow-xl ease-in-out duration-500">
        <div className="flex justify-between w-full px-5 py-10">
          <Link href="/">
            <p className="font-bold cursor-pointer">Hime.Dev</p>
          </Link>
          <div className="border border-black rounded-xl">
            <AiOutlineClose size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
