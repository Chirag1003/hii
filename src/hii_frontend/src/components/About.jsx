import React from 'react';

const EducationItem = ({ institution, duration, details }) => (
  <div className="mb-4 p-4 border rounded-lg">
    <h3 className="text-lg text-white font-semibold">{institution}</h3>
    <p className="text-sm text-gray-600">{duration}</p>
    <ul className="list-disc ml-6">
      {details.map((detail, index) => (
        <li key={index} className="text-sm text-white">{detail}</li>
      ))}
    </ul>
  </div>
);

const About = () => {
  return (
    
      <div className="container  py-8 bg-custom-dark mb-5 border rounded -lg scroll-smooth">
      <h1 className="text-3xl font-bold mb-4 text-center text-white transition duration-300 hover:text-blue-500">Education</h1>
      
      <EducationItem
        institution="Lovely Professional University, Jalandhar"
        duration="Aug'21 - Jul'25"
        details={[
          "Current GPA : 8.42",
          "Minor in Full Stack Development",
          "Elective in Devops"
        ]}
        
      />
      
      
      <EducationItem
        institution="SCR School, Charkhi Dadri"
        duration="Apr'20 - Jun'21"
        details={[
          "Percentage : 92%",
          "Board: Central Board of Secondary Education",
          "Subjects : English, Physics, Chemistry, Mathematics"
        ]}
      />
      </div>
    
  );
};

export default About;
