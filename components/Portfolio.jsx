import Image from "next/image";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Quiz App",
      img: "https://i.postimg.cc/J4YbpD66/quizz-app.png",
      url: "https://quiz-app-ok.netlify.app",
    },
    {
      id: 2,
      name: "Real-State App",
      img: "https://i.postimg.cc/T3ynFdBR/real-state.png",
      url: "https://hi-real-estate-app.vercel.app",
    },
    {
      id: 3,
      name: "CryPig",
      img: "https://i.postimg.cc/VsR9bHjc/crypig.png",
      url: "https://cry-pig.netlify.app/",
    },
    {
      id: 4,
      name: "Food Lover",
      img: "https://i.postimg.cc/vZp5sRd5/food-lover.png",
      url: "https://foodloverzz.netlify.app",
    },
    {
      id: 5,
      name: "Temp Ecom",
      img: "https://i.postimg.cc/wvzJ1hMv/temp.png",
      url: "https://tempecom.netlify.app/",
    },
    {
      id: 6,
      name: "SoftyPie",
      img: "https://i.postimg.cc/FK33FP98/softypie.png",
      url: "https://softypie.netlify.app",
    },
    {
      id: 7,
      name: "Corona",
      img: "https://i.postimg.cc/8PzRdBHf/project-1-png.png",
      url: "https://corona-web.netlify.app/",
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-24  flex flex-col items-center justify-center">
        <div>
          <h2 className="px-4 py-6 mb-6 text-slate-700 text-4xl md:text-6xl ">
            Portfolio
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, id) => {
            const { name, img, url } = project;
            return (
              <div
                key={id}
                className="text-center shadow hover:shadow-2xl rounded-2xl m-4 overflow-hidden cursor duration-500 ease-in "
              >
                {" "}
                <a href={url} target="_blank" rel="noreferrer">
                  <Image src={img} alt={name} width={350} height={220} />
                  <h3 className="text-xl p-5  duration-700 ease-in">{name}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
