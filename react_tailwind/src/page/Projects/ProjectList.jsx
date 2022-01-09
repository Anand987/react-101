import React from "react";
import LandingPage01 from "../../assets/img/LandingPage01.png";
import ProjectItem from "./ProjectItem";

const Project = [
  {
    name: "Landing Project 01",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imageUrl: LandingPage01,
    projectLink: "/projects/landingpage",
  },
  {
    name: "Intercom UI",
    description:
      "Intercom UI designed based on video https://www.youtube.com/watch?v=cg1qbkG0KRI.",
    imageUrl: LandingPage01,
    projectLink: "/projects/intercomui",
  },
  {
    name: "Data Grid Table",
    description: "Materail UI Data Grid Table.",
    imageUrl: LandingPage01,
    projectLink: "/projects/datagrid",
  },
];

const ProjectList = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto mt-10">
        <div className="flex justify-around flex-wrap">
          {Project.map((project) => (
            <div key={`${project.name}+${project.title}`} className="p-10">
              <ProjectItem
                projectName={project.name}
                projectDescription={project.description}
                projectImage={project.imageUrl}
                projectLink={project.projectLink}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Link to="/landingpage/01">Landing Page 01</Link> */}
    </React.Fragment>
  );
};

export default ProjectList;
