import React from "react";
import bookingImg from "../../public/Booking.png";
import iplImg from "../../public/Ipl.png";
import taskImg from "../../public/Taskmanager.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: bookingImg,
      name: "Booking Services",
      desc: "A seamless travel booking platform with personalized profiles, allowing users to manage flights and accommodations effortlessly. Features a user-friendly interface for hassle-free planning.",
      tech: "JavaScript, NodeJS, ExpressJS, MongoDB, REST APIs",
      code: "https://github.com/AayushParashar28/Booking-Services"
    },
    {
      id: 2,
      logo: iplImg,
      name: "IPL Backend",
      desc: "A robust backend system for managing IPL teams and players. Provides comprehensive data access, admin controls for updating player details, and efficient categorization.",
      tech: "JavaScript, NodeJS, ExpressJS, PostgreSQL, REST APIs",
      code: "https://github.com/AayushParashar28/IPL_backend_"
    },
    {
      id: 3,
      logo: taskImg,
      name: "Task Manager",
      desc: "A full-featured task management app supporting user authentication, task categorization, and CRUD operations to enhance productivity and organization.",
      tech: "JavaScript, NodeJS, ExpressJS, MongoDB, REST APIs",
      code: "https://github.com/AayushParashar28/Task_Manager"
    },
    // Add more projects here if you want
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, logo, name, desc, tech, code }) => (
            <div
              className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] object-cover"
                alt={name}
              />
              <div className="flex-1 w-full">
                <div className="px-2 font-bold text-xl mb-2 text-center">{name}</div>
                <p className="px-2 text-gray-700 text-sm mb-2">{desc}</p>
                <p className="px-2 text-gray-500 text-xs mb-2"><strong>Tech Stack:</strong> {tech}</p>
              </div>
              <div className="flex justify-center gap-3 mt-2">
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
