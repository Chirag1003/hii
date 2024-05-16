// export default Projects;
import React from "react";
// import Project from './Project'; // Adjust the import path as necessary
import imageurl1 from "./assests/hotel.png";
import imageurl2 from "./assests/portfolio pic2.png";
import imageurl3 from "./assests/music app2.png";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Website",
      description:
        "Developed a modern hotel website using HTML, CSS, and JavaScript, featuring responsive design, intuitive navigation, and interactive elements for an enhanced user experience.",
      imageUrl: imageurl1,
      demoUrl: "https://chiragsangwan.tech/Royal-Hotel/",
      githubUrl: "https://github.com/Chirag1003/Royal-Hotel",
    },
    {
      title: "Personal Portfolio",
      description:
        "Created a personal portfolio using HTML, CSS, and JavaScript, showcasing projects, skills, and experience with a responsive, user-friendly design.",
      imageUrl: imageurl2,
      demoUrl: "https://chiragsangwan.tech/",
      githubUrl: "https://github.com/Chirag1003/chirag1003.github.io",
    },
    {
        title: 'Music Player',
        description:"Created a compelling project using HTML, CSS, and React, demonstrating adeptness in front-end development. Employed responsive design, interactive elements seamless navigation to enhance user engagement, showcasing creativity",
        imageUrl: imageurl3,
        demoUrl: "https://chiragsangwan.tech/Music-Player/",
        githubUrl: "https://github.com/Chirag1003/Music-Player"    
    }
  ];

  return (
    <section id="projects" className=" bg-custom-dark ">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-white transform transition-transform duration-300 hover:text-blue-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex  align-middle">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:rotate-3 hober:shadow-lg "
            >
              <img className="w-full " src={proj.imageUrl} alt={proj.title} />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {proj.title}
                </h2>
                <p className="mt-2 text-gray-600">{proj.description}</p>
                <div className="mt-4 flex justify-between">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
