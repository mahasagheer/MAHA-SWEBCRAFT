import React from "react";
import Logo from "../assets/Logo1.png";
import FollowMe from "./FollowMe";

const Footer = () => {
  return (
    <footer className="bg-[#07040E]  dark:bg-gray-900 text-white p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="w-20" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MAHA'S
              <br /> WEBCRAFT
            </span>
          </a>
          <FollowMe />
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2024 <a className="hover:underline">MAHA'S WEBCRAFT™</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
