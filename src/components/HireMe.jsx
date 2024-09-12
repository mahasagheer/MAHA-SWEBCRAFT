import React, { useState } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine, RiMailOpenLine, RiPhoneFill } from "@remixicon/react";

const HireMe = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "56222b58-8b8b-4d3e-b682-ba82c1aaef46");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => {
      res.json();
      setShowModal(false);
    });
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer group relative items-center flex gap-1.5 px-5 py-2 bg-[#ADFF00] text-black rounded-full transition font-semibold"
        >
          Hire Me
        </button>
      </div>
      {showModal &&
        createPortal(
          <section
            id="hireMe"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="relative w-[90%] sm:w-[80%] lg:w-[60%] bg-white md:p-4 p-2 shadow-lg text-center z-40 transition-all">
              <div className="flex justify-end">
                <button onClick={() => setShowModal(false)}>
                  <RiCloseLine />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row justify-between md:p-5  md:gap-6 gap-3">
                <div className="lg:pt-[5%] text-left px-[4%] w-full lg:w-[50%]">
                  <p className="text-2xl sm:text-lg lg:text-4xl">
                    Have a Project?
                  </p>
                  <p className="text-base sm:hidden xs:hidden md:block font-semibold py-4">
                    Reach out for your next project! I’m always excited to work
                    on something new and innovative. Let’s discuss your ideas!
                    Share your details below, and I’ll be in touch to explore
                    how we can collaborate.
                  </p>
                  <div className="flex gap-2 py-4">
                    <RiMailOpenLine />
                    <p>mahamohammad148@gmail.com</p>
                  </div>
                  <div className="flex gap-2">
                    <RiPhoneFill />
                    <p>Support: (+92) 319 2345678</p>
                  </div>
                </div>
                <div className="w-full lg:w-[50%]">
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-col p-4 gap-4 rounded-xl"
                  >
                    <p className="text-lg sm:text-lg lg:text-2xl text-left xs:font-semibold sm:font-semibold py-2 sm:py-0 xs:py-0">
                      I'd love to hear from you!
                      <br /> Let's get in touch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full sm:w-[50%] p-2 outline-none border rounded-xl italic text-black border-[#ADFF00]"
                      />
                      <input
                        type="tel"
                        name="phone no"
                        required
                        placeholder="Phone no"
                        className="w-full sm:w-[50%] p-2 outline-none border rounded-xl italic text-black border-[#ADFF00]"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="p-2 outline-none border rounded-xl italic text-black border-[#ADFF00]"
                    />
                    <textarea
                      name="message"
                      cols="30"
                      rows="3"
                      required
                      className="p-2 outline-none border rounded-xl italic text-black border-[#ADFF00]"
                      placeholder="Tell Me About Your Project"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#ADFF00] w-full sm:w-[30%] p-2 rounded-xl"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>,
          document.body
        )}
    </>
  );
};

export default HireMe;
