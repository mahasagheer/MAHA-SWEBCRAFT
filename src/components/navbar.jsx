import {
  RiBookLine,
  RiChat1Line,
  RiCloseLine,
  RiCodeSSlashLine,
  RiFilePaper2Line,
  RiInformationLine,
  RiMenu4Line,
  RiTrophyLine,
} from "@remixicon/react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Logo1 from "../assets/Logo1.png";
import HireMe from "./HireMe";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="p-3  px-[8%] sticky overflow-hidden invisible sm:visible text-white w-full flex flex-row justify-between items-center"
        >
          <div className="flex w-[6%] items-center">
            <img src={Logo1} alt="Logo_image" />
            <p className="text-xl font-semibold ">MAHA'S WEBCRAFT</p>
          </div>
          <div>
            <ul className=" flex flex-row items-center xl:right-10 lg:right-10  lg:text-base xl:gap-12 lg:gap-10 md:gap-4 md:right-2 sm:right-2 sm:gap-4 sm:text-sm md:text-lg">
              <li className="md:px-1">
                <a href="#aboutMe">About Me</a>
              </li>
              <li className="md:px-1 ">
                <a href="#experience">Experience</a>
              </li>
              <li className="md:px-1 ">
                <a href="#skills">Skills</a>
              </li>
              <li className="md:px-1">
                <a href="#projects">Projects</a>
              </li>

              <li className="md:px-1 ">
                <HireMe />
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-4 z-30 w-11/12 bg-[#ADFF00] text-black font-semibold sm:invisible fixed top-3 flex p-4 rounded-full">
          <p className="logo text-base px-3">MAHA'S WEBCRAFT</p>
          <div className="absolute right-8 flex justify-between gap-6">
            <button onClick={() => setMenu(!menu)}>
              <RiMenu4Line />
            </button>
          </div>
        </div>

        {menu && (
          <div
            data-aos="fade-down"
            className=" mx-4 z-30 w-11/12 bg-[#ADFF00] text-black font-semibold sm:invisible fixed top-3 p-4 rounded-2xl"
          >
            <ul className="list-none flex justify-center flex-wrap items-center gap-2 pb-6 text-xs">
              <a
                href="#aboutMe"
                onClick={() => setMenu(false)}
                className="w-1/4 flex items-center flex-col py-2 "
              >
                <RiInformationLine />
                About Me
              </a>
              <a
                href="#experience"
                onClick={() => setMenu(false)}
                className="w-1/4 flex items-center flex-col py-2"
              >
                <RiFilePaper2Line />
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMenu(false)}
                className="w-1/4 flex items-center flex-col py-2"
              >
                <RiCodeSSlashLine />
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMenu(false)}
                className="w-1/4 flex items-center flex-col py-2 "
              >
                <RiTrophyLine />
                Skills
              </a>
              <a className="w-1/4 flex items-center flex-col py-0">
                <RiBookLine />
                <HireMe />
              </a>

              <a
                href="#testimonial"
                onClick={() => setMenu(false)}
                className="w-1/4 flex items-center flex-col py-2 "
              >
                <RiChat1Line />
                Recommendation
              </a>
            </ul>
            <button onClick={() => setMenu(false)}>
              <RiCloseLine className="absolute bottom-5 right-8 w-6 h-6" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
