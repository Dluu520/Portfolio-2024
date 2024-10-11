import React from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center p-10 md:p-52 gap-10 bg-gray"
    >
      <h1 className="text-4xl underline font-bold">Projects</h1>
      <div className="flex border border-black p-4 ">
        <div>Image</div>
        <div className="flex justify-center items-center ">Description</div>
      </div>
    </div>
  );
}

export default Projects;
