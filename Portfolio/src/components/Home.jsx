import React from "react";
import pic from "../../public/photo.jpeg";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl font-semibold text-gray-700">
              Welcome to My Portfolio
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl items-center">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I'm a passionate Full Stack Developer who loves crafting scalable
              web applications and seamless user experiences. With a solid
              foundation in JavaScript, React, Node.js, and REST APIs, I enjoy
              turning complex problems into simple, elegant solutions. <br />
              <br />
              🚀 <strong>Currently, I'm focused on building impactful projects</strong> and actively looking for opportunities to contribute to fast-growing tech teams. <br />
              <br />
              🎯 <strong>Beyond coding</strong>, I enjoy diving into cricket strategies and staying updated with the latest tech trends.
            </p>
            <br />
            {/* Social Media & Tech Stack */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://github.com/AayushParashar28"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aayushparashar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] object-cover bg-gray-100"
              alt="Aayush Parashar profile"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;

