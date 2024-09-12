import React from "react";
import { RiGithubLine, RiLinkedinLine, RiMailAddLine } from "@remixicon/react";

const FollowMe = () => {
  return (
    <>
      <p className="text-black px-[5%] md:px-[8%] mt-[4%] font-semibold">
        Follow me:
      </p>
      <div className="flex px-[5%] md:px-[8%] gap-4 md:gap-10 mt-[2%]">
        <a
          href="mailto: mahasagheer960@gmail.com"
          className="p-2 border-2 border-black rounded-full  hover:bg-[#ADFF00]   transition-transform hover:scale-125 "
        >
          <RiMailAddLine />
        </a>
        <a
          href="https://www.linkedin.com/in/maha-mohammad00/"
          className="p-2 border-2 border-black rounded-full  hover:bg-[#ADFF00]   transition-transform hover:scale-125"
        >
          <RiLinkedinLine />
        </a>
        <a
          href="https://github.com/mahasagheer"
          className="p-2 border-2 border-black rounded-full hover:bg-[#ADFF00]  transition-transform hover:scale-125"
        >
          <RiGithubLine />
        </a>
      </div>
    </>
  );
};

export default FollowMe;
