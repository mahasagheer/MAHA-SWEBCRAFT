import React from "react";
import {
  RiBookLine,
  RiCodeBoxLine,
  RiDatabase2Fill,
  RiDatabase2Line,
  RiLayout4Line,
  RiRobot2Line,
  RiSoundModuleLine,
  RiTerminalBoxLine,
} from "@remixicon/react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="w-full px-[8%] py-[2%]">
        <header className="text-black text-center">
          <span className="lg:text-[4.5rem] md:text-[3.5rem] sm:text-[3rem] xs:text-[2.5rem] font-semibold  pl-[8%]  inline-block leading-none m-0">
            I SPECIALIZED IN A
          </span>
          <br />
          <span className="lg:text-[4.5rem] md:text-[3.5rem] sm:text-[3rem] xs:text-[2.5rem]  font-semibold  pl-[8%]  inline-block leading-none m-0">
            RANGE OF 💪 SKILLS
          </span>
        </header>
        <div className="flex  overflow-hidden justify-evenly md:justify-evenly flex-wrap gap-4 lg:gap-6 md:gap-2 mt-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]"
          >
            <RiCodeBoxLine className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Frontend Development
            </p>
            <p className="text-lg text-center px-[2%]">
              I am an expert in HTML, CSS, JavaScript (ES6), React JS
            </p>
          </div>

          <div className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]">
            <RiTerminalBoxLine className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Back-end Development
            </p>
            <p className="text-lg text-center px-[2%]">
              I am in expert & doing Node Js, Express Js
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]"
          >
            <RiDatabase2Line className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Database Management
            </p>
            <p className="text-lg text-center px-[2%]">
              I am in expert & doing MYSQL, MongoDB, PostgreSQL
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]"
          >
            <RiSoundModuleLine className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Version Control
            </p>
            <p className="text-lg text-center px-[2%]">
              I am in expert & doing Git, GitHub Providing the Best
            </p>
          </div>
          <div className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]">
            <RiLayout4Line className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Responsive Design
            </p>
            <p className="text-lg text-center px-[2%]">
              Creating Visual Appealing & functional websites across devices
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="border border-black w-full sm:w-[70%] md:w-[45%] lg:w-[30%] mb-4 flex flex-col items-center rounded-3xl p-4 sm:p-6 transition-colors duration-300 hover:bg-[#ADFF00]"
          >
            <RiRobot2Line className="w-16 h-16 sm:w-20 sm:h-20" />
            <p className="text-xl sm:text-2xl py-2 sm:py-4 text-center">
              Chatbot Integration
            </p>
            <p className="text-lg text-center px-[2%]">
              I am expert in integrating trained Chatbot in websites
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
