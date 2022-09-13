import React, { useEffect, useState } from "react";
import Skillitem from "./Skillitem";

const skillItems = [
  {
    id: "1",
    name: "HTML",
    img: "/../public/assets/html5-logo-31813.png",
  },
  {
    id: "2",
    name: "CSS",
    img: "/../public/assets/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3.0110241015249245483901.png",
  },
  {
    id: "3",
    name: "Tailwind CSS",
    img: "/../public/assets/tailwind-css-icon.png",
  },
  {
    id: "4",
    name: "Javascript",
    img: "/../public/assets/javascript-39404.png",
  },
  {
    id: "5",
    name: "ES6",
    img: "/../public/assets/es6-logo-png-transparent.png",
  },

  {
    id: "6",
    name: "ReactJS",
    img: "/../public/assets/react-logo-png-js-logo-react-react-js-icon-512x512.png",
  },
  {
    id: "7",
    name: "NextJS",
    img: "/../public/assets/nextjs-icon.png",
  },
  {
    id: "8",
    name: "Bootstrap",
    img: "/../public/assets/bootstrap-5-logo-icon.png",
  },
  {
    id: "9",
    name: "Material UI",
    img: "/../public/assets/PngItem_5779757.png",
  },
  {
    id: "10",
    name: "Firebase",
    img: "/../public/assets/google-firebase-icon.png",
  },
  {
    id: "11",
    name: "Github",
    img: "/../public/assets/github-icon.png",
  },
];

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillItems);
  }, []);

  console.log(skills);
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 anime-bg">
      <div className="container mx-auto py-24  flex flex-col items-center justify-center ">
        <div>
          <h2 className="px-4 py-6 mb-6 text-white text-4xl md:text-6xl ">
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
              <Skillitem key={id} name={item.name} img={item.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
