import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center p-10 md:p-52 gap-10 bg-gray"
    >
      <h1 className="text-4xl underline font-bold">Projects</h1>
      <div className="flex border border-black overflow-hidden bg-white ">
        <Image
          width={400}
          height={600}
          alt=""
          src="/p-trainer.png"
          className=" overflow-x-hidden"
        ></Image>
        <div className="flex justify-center items-center text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro
          alias labore officiis excepturi facilis nesciunt voluptatum optio
          voluptatem delectus, sunt eos, facere consequuntur vel quos libero
          deserunt doloremque mollitia!
        </div>
      </div>
    </div>
  );
}

export default Projects;
