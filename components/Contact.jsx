import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-24 ">
      <h1 className="section-title">Get in touch!</h1>
      <p className="w-full md:w-[40%] text-center">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className=" px-6 py-2 md:px-10 md:py-3 mt-6 md:mt-10 font-bold text-sm md:text-l tracking-widest  rounded-md border-[1px] border-[#64ffda] uppercase text-[#64ffda] bg-transparent hover:bg-[#64ffdb31] hover: ease-in-out duration-500">
        Say Hello!
      </button>
    </div>
  );
};

export default Contact;
