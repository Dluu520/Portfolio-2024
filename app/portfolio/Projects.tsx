import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Fashionista",
    image: "/fashionista.png",
    description:
      "Showcasing frontend skills with my own design of a landing page.",
    demo: "https://fashionista-dong-luu.vercel.app/",
    status: 1,
  },
  {
    name: "East Star",
    image: "/p-trainer.png",
    description: "Showcasing frontend skills with the design found in Shopify.",
    demo: "https://p-trainer.vercel.app/",
    status: 1,
  },
  {
    name: "Agilify",
    image: "/crm.png",
    description:
      "My take of a full stack application to help make project planning and production phases be more efficient.",
    demo: "/#projects",
    status: 0,
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-wrap justify-center items-center p-10 md:p-52 gap-10 bg-gray "
    >
      <h1 className="text-4xl underline font-bold ">Projects</h1>
      {projects.map((prj, index) => {
        return (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg bg-white w-full shadow-lg p-4 "
            key={index}
          >
            <Image
              width={200}
              height={200}
              alt=""
              src={prj.image}
              className="w-full col-span-1 h-64 object-cover rounded-lg border border-black"
            ></Image>
            <div className="w-full sm:col-span-2 flex flex-col p-6 justify-between">
              <span
                className={`${
                  prj.status ? `text-green-600` : `text-red-600`
                }text-center`}
              >
                <p
                  className={`${
                    prj.status ? `text-green-600` : `text-red-600`
                  }`}
                >
                  {prj.status ? "Live: " : "In-Progess: "}
                </p>
                {prj.description}
              </span>
              <Link href={prj.demo} className="text-blue-500 text-center">
                Demo
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
