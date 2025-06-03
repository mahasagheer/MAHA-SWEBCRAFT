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
          <div className="flex items-center gap-4 md:text-xl text-base">
               <img src={Star} alt="Star" className="w-8" />
          <p>Associate Software Engineer – Codace Solutions Pvt. Ltd.</p>
          </div>
       
          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base  sm:text-lg py-4"
          >
Currently working on building responsive web applications with React.js, integrating RESTful APIs, and collaborating with cross-functional teams. Focused on delivering high-quality, scalable software solutions. </p>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="w-full sm:w-[60%] pt-6 sm:ml-[45%]">
          <div className="flex items-center gap-4 md:text-xl text-base">
               <img src={Star} alt="Star" className="w-8" />
          <p> MERN Stack Intern – Codace Solutions Pvt. Ltd.</p>
          </div>          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base sm:text-lg py-4"
          >
Completed a hands-on internship where I developed user-friendly interfaces, built backend APIs, and implemented MongoDB databases, laying a strong foundation in full-stack development.          </p>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="w-full sm:w-[60%] pt-6 sm:pl-[2%]">
          <div className="flex items-center gap-4 md:text-xl text-base">
               <img src={Star} alt="Star" className="w-8" />
          <p>Web Development Bootcamp Participant – atomcamp</p>
          </div>            <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base sm:text-lg py-4"
          >
Participated in an intensive two-month bootcamp focused on JavaScript, React, Node.js, Next.js and MongoDB. Built projects including a fully functional e-commerce site and a real-time chat application. </p>
        </div>
               <hr className="border-gray-600 my-4" />

        <div className="w-full sm:w-[60%] pt-6 sm:ml-[45%]">
          <div className="flex items-center gap-4 md:text-xl text-base">
               <img src={Star} alt="Star" className="w-8" />
          <p> Teaching and Mentorship Experience</p>
          </div>          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-base sm:text-lg py-4"
          >
Volunteered to teach C++ and computer science to intermediate students, helping them develop logical thinking and problem-solving skills while refining my communication and teaching abilities. </p>
        </div>

      </div>
    </>
  );
};

export default Experience;
