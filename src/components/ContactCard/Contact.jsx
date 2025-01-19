import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const ContactFooter = () => {
  return (
    <div className="bg-gray-800">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="flex justify-center py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:pl-10">
            {/* Column 1: Important Links */}
            <div className="flex flex-col">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-left mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">
                    <a href="#home">About Me</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="#resume">Resume</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Contact Me */}
            <div className="flex flex-col">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold text-left mb-3">
                  Contact Me
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker />
                    <p>Los Angeles, California USA</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall />
                    <p>+1 702-742-8070</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage />
                    <p>TonyAmin2520@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Other Links (Social Media) */}
            <div className="flex flex-col items-center justify-start py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold text-left mb-3">
                Important Links
              </h1>
              <div className="flex flex-col gap-6 items-center">
                <a
                  href="https://www.linkedin.com/in/tony-amin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-5xl text-blue-600" />
                </a>
                <a
                  href="https://github.com/Al-Amin2099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-5xl text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">
              @copyright 2025 Tony Amin
            </span>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFooter;
