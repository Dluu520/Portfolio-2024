import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="snap-center h-screen flex flex-col justify-center items-center  md:p-52 gap-10 bg-white"
    >
      <h1 className="text-4xl underline font-bold">Education</h1>
      <div className="flex flex-col border border-black p-4 m-2 sm:w-[30%] md:w-[80%] lg:w-[50%]  gap-2">
        <div className="flex justify-between font-bold text-xl">
          <h1>University of Central Oklahoma</h1>
          <h1>Sept 2016 - June 2020</h1>
        </div>
        <h2 className="text-lg">Bachelor of Science in Computer Science</h2>
        <span>
          <div className="text-sm">
            <li>
              Use of different programming languages, database and agile/scrum
              environment.
            </li>
            <li>
              Experience as a scrum master to create requirements, review goals,
              assemble meetings, and create/complete deadlines.
            </li>
            <li>Major GPA of 3.00.</li>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Education;
