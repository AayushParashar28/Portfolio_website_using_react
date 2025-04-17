import React from "react";
import codingNinjasLogo from "../../public/codingninjas.png"; // Use a high-res logo

function Experience() {
  const experiences = [
    {
      id: 1,
      companyLogo: codingNinjasLogo,
      jobTitle: "Teaching Assistant (Part-time)",
      company: "Coding Ninjas (Remote)",
      duration: "Dec 2022 – Mar 2023",
      achievements: [
        "Mentored 100+ students in Data Structures and Algorithms.",
        "Provided tailored solutions to 200+ coding problems.",
        "Helped students achieve a 40% increase in problem-solving ability and 50% improvement in coding performance.",
      ],
    },
  ];

  return (
    <div
      name="Experience"
      id="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="space-y-8">
          {experiences.map(
            ({ id, companyLogo, jobTitle, company, duration, achievements }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center gap-8 border-2 border-gray-300 rounded-2xl shadow-lg p-8 bg-white"
              >
                <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-md p-4 border border-gray-200">
                  <img
                    src={companyLogo}
                    alt={company + " logo"}
                    className="w-28 h-28 object-contain" // 112px x 112px
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl mb-1">{jobTitle}</div>
                  <div className="text-gray-700">{company}</div>
                  <div className="text-gray-500 text-sm mb-2">{duration}</div>
                  <ul className="list-disc ml-6 text-gray-800">
                    {achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
