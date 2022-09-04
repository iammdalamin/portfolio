import Image from "next/image";
import React from "react";

const Skillitem = ({ name, img }) => {
  console.log(name);
  return (
    <div className=" bg-white m-5 p-8 text-center w-[250px] h-[200px] items-center rounded-lg cursor-pointer">
      <Image src={img} alt={name} width={80} height={80} />
      <h1 className="mt-5 text-black text-2xl md:text-3xl">{name}</h1>
    </div>
  );
};

export default Skillitem;
