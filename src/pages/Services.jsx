import React from "react";
import "./services.css";

const sections = [
  {
    title: "CAPTATION",
    description:
      "We specialize in capturing content that connects. Our goal is to create compelling content that performs across various platforms.",
    services: [
      "COMMERCIALS",
      "AFTERMOVIES",
      "PHOTOGRAPHY",
      "DISPLAY CONTENT",
      "SOCIAL MEDIA CONTENT",
    ],
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
  {
    title: "PRODUCTION",
    description:
      "Our production team ensures high-quality visuals that bring your brand to life with stunning effects and dynamic storytelling.",
    services: ["FILMING", "EDITING", "MOTION GRAPHICS", "COLOR GRADING"],
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
  // Add more sections as needed
];

const AlternateSections = () => {
  return (
    <div className="alternate-sections">
      {sections.map((section, index) => (
        <div className={`section ${index % 2 === 0 ? "image-left" : "image-right"}`} key={index}>
          <div className="image-container">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="text-container">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ul>
              {section.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternateSections;

