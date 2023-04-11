import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsChatSquareQuote } from "react-icons/bs";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Drew",
      img: "https://i.postimg.cc/9QfbsQ1f/pexels-italo-melo-2379004.jpg",
      quotes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem aperiam facere rerum quas, enim magni tempore molestiae, quae accusamus sit odio harum, sint voluptate debitis quidem mollitia eligendi in.Vero numquam!",
    },
    {
      name: "Robert Beiber",
      img: "https://i.postimg.cc/8kBb5605/pexels-pixabay-220453.jpg",
      quotes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem aperiam facere rerum quas, enim magni tempore molestiae, quae accusamus sit odio harum, sint voluptate debitis quidem mollitia eligendi in.Vero numquam!",
    },
    {
      name: "Linkon Piter",
      img: "https://i.postimg.cc/VLg47CqT/pexels-pixabay-532220.jpg",
      quotes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem aperiam facere rerum quas, enim magni tempore molestiae, quae accusamus sit odio harum, sint voluptate debitis quidem mollitia eligendi in.Vero numquam!",
    },
    {
      name: "Johnson Robert",
      img: "https://i.postimg.cc/SKBGX74X/pexels-yogendra-singh-1760901.jpg",
      quotes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem aperiam facere rerum quas, enim magni tempore molestiae, quae accusamus sit odio harum, sint voluptate debitis quidem mollitia eligendi in.Vero numquam!",
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-24  flex flex-col items-center justify-center ">
        <div>
          <h2 className="section-title px-4 py-6 mb-6  text-4xl md:text-6xl ">
            Testimonial
          </h2>
          <div className="flex flex-col md:flex-row">
            {testimonials.map((tmonial, id) => {
              const { name, img, quotes } = tmonial;
              return (
                <motion.div
                  initial={{}}
                  key={id}
                  className="text-center shadow-2xl rounded-2xl m-4 overflow-hidden p-6"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                  />

                  <h3 className="text-xl mt-2 section-title">{name}</h3>
                  <BsChatSquareQuote size={25} className="mx-auto mb-5" />

                  <p>{quotes}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
