import React from "react";
import Star from "../assets/star-1.png";

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="w-full  overflow-hidden bg-[#07040E] px-[8%] py-[2%] text-white"
      >
        <header className="text-center sm:text-left">
          <span className="text-[6vw] md:text-[4vw] font-semibold block leading-none m-0">
            DISCOVER THE MILESTONE OF MY
          </span>
          <span className="text-[6vw] md:text-[4vw] font-semibold block leading-none m-0">
            WEB DEVELOPMENT 💻 CAREER.
          </span>
        </header>

        <div className="w-full sm:w-[60%] pt-6 sm:pl-[2%]">
          <img src={Star} alt="Star" className="w-12" />
          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base  sm:text-lg py-4"
          >
            I am currently doing an internship as a MERN stack developer, where
            I am honing my skills in both frontend and backend technologies.
            This experience is allowing me to gain practical knowledge in
            building full-stack applications using MongoDB, Express, React, and
            Node.js.
          </p>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="w-full sm:w-[60%] pt-6 sm:ml-[45%]">
          <img src={Star} alt="Star" className="w-12" />
          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base sm:text-lg py-4"
          >
            I have volunteered to teach C++ to students, focusing on developing
            their logical thinking and problem-solving skills. This experience
            has strengthened my ability to explain complex concepts in a clear
            and approachable way.
          </p>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="w-full sm:w-[60%] pt-6 sm:pl-[2%]">
          <img src={Star} alt="Star" className="w-12" />
          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base sm:text-lg py-4"
          >
            I have volunteered to teach computer science to intermediate
            students, helping them get familiar with programming languages and
            guiding them in building strong logic and problem-solving skills.
            This experience has allowed me to inspire and mentor students in
            developing a solid foundation in coding.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
