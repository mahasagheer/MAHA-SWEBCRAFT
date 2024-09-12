import React, { useState } from "react";
import Image from "../src/assets/maham.png";
import Quote from "../src/assets/quotes.png";

const testimonials = [
  {
    name: "Sufian Ahmad",
    post: "Backend Developer",
    main: "Outstanding Work",
    recommendation:
      "I had the pleasure of mentoring Maha Mohammad during their time as a frontend developer. Maha Mohammad has a natural ability to translate design concepts into fully functional, responsive, and visually appealing web interfaces. Their proficiency in modern frontend technologies, is truly impressive. What sets them apart is their attention to detail, ensuring cross-browser compatibility and accessibility in every project.",
  },
  {
    name: "Awais Shahbaz",
    post: "MERN Stack Developer",
    main: "Growing Developer",
    recommendation:
      "I highly recommend for any frontend development role. During our time working together, [Developer's Name] consistently showcased a deep understanding of web development, especially in building responsive, user-friendly interfaces. Their ability to write clean, efficient code, paired with their expertise in frameworks like React and CSS preprocessors, made them an invaluable part of our team.",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="testimonial" className="relative w-full bg-[#07040E]">
      <header className=" text-white text-center sm:text-left px-[5%] sm:px-[10%] pt-[2%]">
        <span className="text-[6vw] md:text-[4vw] font-semibold leading-none block">
          💬 HEAR FROM THOSE
        </span>
        <span className="text-[6vw] md:text-[4vw] font-semibold leading-none block">
          I'VE WORKED WITH!{" "}
        </span>
      </header>
      <div className="relative overflow-hidden rounded-lg md:h-[80vh] sm:h-[50vh] xs:h-[50vh] flex items-center justify-center">
        <div className="absolute bg-white inset-0 flex items-center justify-between border border-white mx-[5%] sm:mx-[10%] my-[5%] sm:my-[3%] rounded-3xl">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="w-full px-[5%] sm:px-[10%] flex flex-col"
          >
            <img
              src={Quote}
              alt="Quote_symbol"
              className="md:w-20 sm:w-10 xs:w-10 absolute left-[5%] sm:left-[8%] md:translate-y-[-4rem] sm:translate-y-[-2rem] xs:translate-y-[-2rem]"
            />
            <p className="text-lg sm:text-base pl-4 xs:text-base">
              {testimonials[currentSlide].name} -{" "}
              {testimonials[currentSlide].post}
            </p>
            <p className="text-2xl sm:text-3xl pl-4">
              {" "}
              {testimonials[currentSlide].main}
            </p>
            <p className="md:text-lg px-2 sm:px-4 py-2 text-left sm:text-xs xs:text-xs">
              {testimonials[currentSlide].recommendation}
            </p>
            <img
              src={Quote}
              alt="Quote_symbol"
              className="md:w-20 sm:w-10  xs:w-10 rotate-180 absolute right-[5%] sm:right-[10%] md:translate-y-[15rem]  sm:translate-y-[10rem] xs:translate-y-[12rem]"
            />
            <div className="flex gap-2 pl-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-2 ${
                    currentSlide === index
                      ? "bg-black scale-125 sm:scale-150"
                      : "bg-black opacity-50"
                  }`}
                  aria-current={currentSlide === index ? "true" : "false"}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
