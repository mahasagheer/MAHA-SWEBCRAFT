import React from "react";

const Intro = () => {
  return (
    <section
      id="aboutMe"
      data-aos="fade-down"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
      className="w-full lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] xs:text-[1.5rem]  text-center py-[5%] px-[8%]"
    >
      👋 Hello! I'm Maha,{" "}
      <strong className="text-[#7547A8] font-semibold">___</strong> a creative
      and driven web developer with{" "}
      <span className="text-[#7547A8]  font-semibold underline">
        1 YEAR OF EXPERIENCE
      </span>{" "}
      in the field. I thrive on turning imaginative ideas into digital
      realities, constantly seeking innovative ways to blend design into
      technologies. I possesses a strong foundation in{" "}
      <span className="text-[#7547A8]  font-semibold underline">FRONT-END</span>{" "}
      and
      <span className="text-[#7547A8]  font-semibold underline">
        BACK-END
      </span>{" "}
      development, as well as a keen eye for responsive design and user-centered
      interfaces.
    </section>
  );
};

export default Intro;
