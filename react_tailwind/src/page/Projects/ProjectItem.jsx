import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const { projectLink, projectName, projectDescription, projectImage } = props;
  return (
    <React.Fragment>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={projectImage} alt="" />
        </a>
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {projectName}
          </h5>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {projectDescription}
          </p>
          <Link
            to={projectLink}
            className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
          >
            Live Demo
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectItem;
