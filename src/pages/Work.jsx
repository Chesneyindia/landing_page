import React from "react";
import { Link } from "react-router-dom";
import "./work.css";

const projects = [
  {
    title: "MOTOGP",
    link: "/motogp",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "RED BULL",
    link: "/red-bull",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MOTOGP",
    link: "/motogp",
    year: "june 2023",
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MOTOGP",
    link: "/motogp",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
          <div className="overlay">
            <h2>{project.title}</h2>
            <Link to={project.link} className="project-link">
              CHECK OUT THE PROJECT ↗
            </Link>
            <span className="year">{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
