import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto py-24 flex flex-col justify-start"
    >
      <div className="w-20">
        <h2 className="px-4 py-6 mb-6 text-4xl md:text-6xl border-double border-b-[6px] border-yellow-500">
          About
        </h2>
      </div>

      <p className="max-w-[1200px] text-xl leading-8 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        reiciendis voluptatum, nam dolor tempore a nihil consequatur repellat
        aspernatur quos vel praesentium voluptate ea natus. Sequi eligendi
        doloribus sed iusto. Quia sequi illum labore ipsa quae aliquid
        voluptatum dolores, reiciendis iusto aliquam? Voluptate facilis
        blanditiis libero esse eligendi commodi expedita perferendis aspernatur
        cumque eveniet, asperiores veniam ex quo quam hic.
      </p>
    </div>
  );
};

export default About;
