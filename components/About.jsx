import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto px-10 py-24 flex flex-col justify-start"
    >
      <h2 className="section-title  py-3 mb-6 text-4xl md:text-6xl ">
        About Me
      </h2>

      <p className="max-w-[1200px]  md:text-xl text-lg leading-8 ">
        Hello! My name is Brittany and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS! Fast-forward to
        today, and I’ve had the privilege of working at an advertising agency, a
        start-up, a huge corporation, and a student-led design studio. My main
        focus these days is building accessible, inclusive products and digital
        experiences at Upstatement for a variety of clients. I also recently
        launched a course that covers everything you need to build a web app
        with the Spotify API using Node & React.
      </p>
    </div>
  );
};

export default About;
