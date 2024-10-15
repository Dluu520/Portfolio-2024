import React from "react";

function AboutMe() {
  return (
    <div
      id="about"
      className="snap-center h-screen flex flex-col justify-center items-center p-10 md:p-52 gap-10 bg-white "
    >
      <h1 className="text-4xl underline font-bold">About Me</h1>
      <span>
        Hello, I go by Don, a Software Developer with one year of work
        experience.
        <br /> <br />
        I've been grateful for the opportunity to be able to dive into various
        projects, like crafting a tailored CRM (Customer Relationship Management
        System) for Good Greek Moving and Storage, a rising star in the industry
        based Florida.
        <br /> <br />
        From my career, I've honed both my front-end and back-end skills, but my
        expertise lies towards the front-end developement. Keeping up with the
        latest trends is a priority for me, ensuring I deliver top-notch
        solutions. I specialize mainly in React.js and Next.js, I'm comfortable
        with Angular and Vue. I'm most familiar with stacks such as MERN (Mongo,
        Express, React, Node).
      </span>
    </div>
  );
}

export default AboutMe;
