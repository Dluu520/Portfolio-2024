import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Fashionista",
    image: "/fashionista.png",
    description:
      "Live: Showcasing frontend skills with my own design of a landing page.",
    demo: "https://fashionista-dong-luu.vercel.app/",
  },
  {
    name: "East Star",
    image: "/p-trainer.png",
    description:
      "Live: Showcasing frontend skills with the design found in Shopify.",
    demo: "https://p-trainer.vercel.app/",
  },
  {
    name: "Agilify",
    image: "/crm.png",
    description:
      "In-Progess: My take of a full stack application to help make project planning and production phases be more efficient.",
    demo: "/#projects",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="h-auto overflow-hidden flex flex-col justify-center items-center p-10 md:p-52 gap-10 bg-gray"
    >
      <h1 className="text-4xl underline font-bold ">Projects</h1>
      {projects.map((prj, index) => {
        return (
          <div
            className="grid grid-cols-3  w-[50%]  h-32 bg-white rounded-lg overflow-hidden"
            key={index}
          >
            <Image
              width={2000}
              height={600}
              alt=""
              src={prj.image}
              className="col-span-1 h-full overflow-hidden rounded-tl-lg roundedbl-lg"
            ></Image>
            <div className="col-span-2 flex flex-col justify-between p-6  items-center text-balance">
              <p className="text-center"> {prj.description}</p>
              <Link href={prj.demo}>Demo</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
