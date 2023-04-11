import React, { useEffect, useState } from "react";
import Skillitem from "./Skillitem";

const skillItems = [
  {
    id: "1",
    name: "HTML",
    img: "https://i.postimg.cc/ZYFHxqz2/html5-logo-31813.png",
  },
  {
    id: "2",
    name: "CSS",
    img: "https://i.postimg.cc/zBYwTstq/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png",
  },
  {
    id: "3",
    name: "Tailwind CSS",
    img: "https://i.postimg.cc/gjNvFnY0/tailwind-css-icon.png",
  },
  {
    id: "4",
    name: "Bootstrap",
    img: "https://i.postimg.cc/j2KXYpPM/bootstrap-5-logo-icon.png",
  },
  {
    id: "5",
    name: "Material UI",
    img: "https://i.postimg.cc/2SJ7Sbnb/Png-Item-5779757.png",
  },
  {
    id: "6",
    name: "Javascript",
    img: "https://i.postimg.cc/nc31Nwz1/javascript-39404.png",
  },
  {
    id: "7",
    name: "ES6",
    img: "https://i.postimg.cc/Fz9jBjXq/es6-logo-png-transparent.png",
  },

  {
    id: "8",
    name: "ReactJS",
    img: "https://i.postimg.cc/W3mG85Cg/react-logo-png-js-logo-react-react-js-icon-512x512.png",
  },
  {
    id: "9",
    name: "NextJS",
    img: "https://i.postimg.cc/fb9jtzvH/nextjs-icon.png",
  },
  {
    id: "10",
    name: "Redux",
    img: "https://i.postimg.cc/1ttVVMTf/pngwing-com-1.png",
  },
  {
    id: "11",
    name: "NodeJS",
    img: "https://i.postimg.cc/3JXdc6nm/nodejs-1-logo-png-transparent.png",
  },
  {
    id: "12",
    name: "ExpressJS",
    img: "https://i.postimg.cc/85KWZxWR/pngwing-com.png",
  },

  {
    id: "13",
    name: "MongoDB",
    img: "https://i.postimg.cc/sxn4kvhN/pngwing-com-2.png",
  },
  {
    id: "14",
    name: "Firebase",
    img: "https://i.postimg.cc/qMJLbdkR/google-firebase-icon.png",
  },
  {
    id: "15",
    name: "Github",
    img: "https://i.postimg.cc/C5N4hc4S/github-icon.png",
  },
];

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillItems);
  }, []);

  return (
    <section className="bg-[#031B34]">
      <div className="container mx-auto py-24  flex flex-col items-center justify-center ">
        <div>
          <h2 className="section-title px-4 py-6 mb-6  text-4xl md:text-6xl ">
            My Skills
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {skills.map((item, id) => {
            console.log(item.name, id);
            return (
              // <div key={id}>
              //   <h1>{item.name}</h1>
              // </div>
              <Skillitem key={id} id={id} name={item.name} img={item.img} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
