import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Skillitem = ({ name, img, id }) => {
  console.log(id);
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      whileInView={{
        scale: 1,
        transition: {
          duration: 0.1 * id,
        },
      }}
      className=" bg-white  shadow-2xl

    m-5 p-8 text-center w-[200px] h-[200px] items-center rounded-xl cursor-pointer"
    >
      <Image
        src={img}
        alt={name}
        width={80}
        height={80}
        className="object-contain"
      />
      <h1 className="mt-5 text-slate-600 text-xl md:text-2xl">{name}</h1>
    </motion.div>
  );
};

export default Skillitem;
