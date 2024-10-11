import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="h-screen flex flex-col justify-center items-center  md:p-52 gap-10 bg-white"
    >
      <h1 className="text-4xl underline font-bold">Education</h1>
      <div className="flex flex-col border border-black p-4 w-[50%]  gap-2">
        <div className="flex justify-between font-bold text-xl">
          <h1>University of Central Oklahoma</h1>
          <h1>Sept 2016 - June 2020</h1>
        </div>
        <h2 className="text-lg">Bachelor of Science in Computer Science</h2>
        <span>
          <ul className="text-sm">
            Use of different programming languages, database and agile/scrum
            environment, as well as being a scrum master of a team to meet
            requirements and deadlines. Major GPA of 3.00.
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Education;
