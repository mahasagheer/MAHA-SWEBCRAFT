import { RiArrowRightLine } from "@remixicon/react";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CV from "./assets/maha.pdf";
import Experience from "./components/Experience";
import Testimonial from "./testimonial";
import Footer from "../src/components/Footer";
import FollowMe from "./components/FollowMe";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <main className="w-full overflow-hidden xs:pb-[4%] bg-[#07040E] text-white">
        <Navbar />
        <div></div>
        <span
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="text-[8vw] md:text-[6vw] lg:text-[6vw] font-semibold pl-[5%] md:pl-[8%] pt-[4%] text-white block leading-none m-0"
        >
          CODING WITH
        </span>
        <span
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="text-[8vw] md:text-[6vw] lg:text-[6vw] font-semibold pl-[7%] md:pl-[13%] text-white block leading-none m-0"
        >
          🔥 PASSION, CREATING
        </span>
        <span
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="text-[8vw] md:text-[6vw] lg:text-[6vw] font-semibold pl-[5%] md:pl-[8%] text-white block leading-none m-0"
        >
          WITH PURPOSE
        </span>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="w-[90%] text-lg md:w-[70%] lg:w-[40%] pl-[5%] md:pl-[8%] pt-[3%]"
        >
          Hello and welcome to my web developer protfolio! I am trilled to
          showcase my passion for crafting captivating and functional websites.
        </div>
        <div className="flex flex-row gap-4 md:gap-[10%] justify-evenly w-[90%] sm:w-[60%] pb-[3%] lg:w-[30%] ml-[5%] md:ml-[8%] mt-[2%]">
          <button className="cursor-pointer group relative items-center flex gap-1.5 px-6 py-3 bg-[#ADFF00] text-black rounded-full hover:bg-opacity-70 transition font-semibold shadow-md">
            <span className="bg-white rounded-full p-1">👋</span> Let's Talk
          </button>
          <button>
            <a href={CV}>
              <button className="cursor-pointer relative items-center flex gap-6 md:gap-10 text-white rounded-full font-semibold">
                <span className="bg-[#ADFF00] rounded-full p-3 z-10 text-black">
                  <RiArrowRightLine />
                </span>
                <span className="border-2 absolute ml-6 md:ml-8 border-white rounded-full p-5 bg-transparent"></span>
                Download CV
              </button>
            </a>
          </button>
        </div>
      </main>
      <FollowMe />
      <Intro />
      <Experience />
      <Skills />
      <Testimonial />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
