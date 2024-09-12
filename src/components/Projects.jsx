import React from "react";
import ProjectOne from "../assets/projectOne.png";
import ProjectTwo from "../assets/projectTwo.png";
import ProjectThree from "../assets/projectThree.png";
import { RiArrowRightUpLine } from "@remixicon/react";

const Projects = () => {
  return (
    <>
      <section id="projects" className="w-full py-4 px-[8%]">
        <header className="text-black ">
          <span className="text-[6vw] md:text-[4vw] font-semibold leading-none block">
            HERE A GLIMPSE OF
          </span>
          <span className="text-[6vw] md:text-[4vw] font-semibold leading-none block">
            SOME EXCITING 👩‍💻 PROJECTS
          </span>
          <span className="text-[6vw] md:text-[4vw] font-semibold leading-none block">
            I'VE DONE
          </span>
        </header>

        <div className="flex  overflow-hidden flex-wrap justify-between gap-4 mt-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border-2 border-black w-full sm:w-[48%] flex flex-col rounded-3xl p-4 sm:p-6"
          >
            <img
              src={ProjectOne}
              alt="E-commerce Website"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-left text-xl md:text-2xl py-1 font-semibold">
              E-commerce Website
            </p>
            <p className="text-left text-sm md:text-base">
              Explore the latest trends in fashion with our sleek and intuitive
              e-commerce platform, designed for a seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 xs:gap-1 xs:mt-2 sm:justify-start">
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                React
              </div>
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                API
              </div>
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                Tailwind CSS
              </div>
            </div>

            <a
              href="https://projectdone.netlify.app"
              className="text-left mt-4 text-black font-bold"
            >
              <div className="flex items-center">
                View Project
                <span className="bg-[#ADFF00] ml-[2%] rounded-full p-2 text-black">
                  <RiArrowRightUpLine />
                </span>
              </div>
            </a>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border-2 border-black w-full sm:w-[48%] flex flex-col rounded-3xl p-4 sm:p-6"
          >
            <img
              src={ProjectTwo}
              alt="E-commerce Website"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-left text-xl md:text-2xl py-1 font-semibold">
              Interior Design Website
            </p>
            <p className="text-left text-sm md:text-base">
              Transform your space with modern, stylish interior design inspired
              by the latest fashion trends. Elevate your home with curated
              aesthetics.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 xs:gap-1 xs:mt-2 sm:justify-start">
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                HTML
              </div>
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                Bootstrap
              </div>
              <div className="border border-black p-2 px-4 rounded-full text-sm sm:text-base">
                Javascript
              </div>
            </div>

            <a className="text-left font-bold mt-7 text-black">
              <div className="flex items-center">
                View Project
                <span className="bg-[#ADFF00] ml-[2%] rounded-full p-2 text-black">
                  <RiArrowRightUpLine />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
