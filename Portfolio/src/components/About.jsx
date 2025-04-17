import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hi, I'm Aayush Parashar, a passionate Full Stack Developer with a strong foundation in IT and a keen interest in building impactful, user-focused web applications. I strive to create scalable and visually appealing software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc ml-6">
          <li>
            <strong>NextLeap</strong> – Product Management Fellow<br />
            <span className="text-gray-600 text-sm">Remote, India | Feb 2025 – Apr 2025</span>
          </li>
          <li>
            <strong>Oriental College of Technology</strong> – B.Tech, Computer Science Engineering; GPA: 8.64<br />
            <span className="text-gray-600 text-sm">Bhopal, India | July 2020 – June 2024</span>
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc ml-6">
          <li><strong>Languages:</strong> JavaScript</li>
          <li><strong>Frameworks:</strong>ReactJS, NodeJS, ExpressJS, REST API</li>
          <li><strong>Tools:</strong> GIT, PostgreSQL, MongoDB</li>
          <li><strong>Soft Skills:</strong> Leadership, Product Management, Public Speaking, Time Management</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Certifications
        </h1>
        <ul className="list-disc ml-6">
          <li>Certificate of Excellence in Java – Coding Ninjas</li>
          <li>Certificate of Completion, Data Structures and Algorithms – Coding Ninjas</li>
          <li>Problem Solving (Basic) – HackerRank</li>
          <li>Java (Basic) – HackerRank</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity as a full stack developer to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
