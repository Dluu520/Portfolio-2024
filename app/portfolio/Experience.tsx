import React from "react";
import styles from "@/app/ui/experience.module.css";

const experiences = [
  {
    started: 2020,
    ended: 2022,
    position: "IT/Receptionist",
    jd: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae inventore expedita iure facere aperiam fugiat adipisci quod itaque illum deleniti, voluptatibus, voluptate beatae natus magnam! Vero molestias tempore dolorum ratione.",
  },
  {
    started: 2022,
    ended: 2023,
    position: "Software Engineer",
    jd: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae inventore expedita iure facere aperiam fugiat adipisci quod itaque illum deleniti, voluptatibus, voluptate beatae natus magnam! Vero molestias tempore dolorum ratione.",
  },
];

function Experience() {
  return (
    <div
      id="experience"
      className="h-auto overflow-hidden flex flex-col justify-center items-center p-4 md:p-52 gap-10 bg-gray"
    >
      <h1 className="text-4xl underline font-bold">Experience</h1>
      <span
        className={`${styles.timeline} [&>*:nth-child(odd)]:${styles.right} [&>*:nth-child(even)]:${styles.left} `}
      >
        {/* {experiences.map((exp, index) => {
          return (
            <ul key={index} className={`${styles.container}`}>
              <div className={`${styles.content}`}>
                <h2>{exp.started}</h2>
                <p>{exp.jd}</p>
              </div>
            </ul>
          );
        })} */}
        <div className={`${styles.container} ${styles.left}`}>
          <div className={`${styles.content}`}>
            <h2 className="font-bold ">2020 - 2023</h2>
            <h3 className="font-bold text-lg">
              LXSTUDIO INC., IT / Receptionist
            </h3>
            <div className="text-sm flex flex-col gap-2 ">
              <li>
                Communicated with clients via email and in person to gather
                details on required supplies and assistance.
              </li>
              <li>
                Coordinated with team members to maintain computers and devices
                across campus
              </li>
              <li>
                Troubleshot complex environments and A/V equipment, isolated
                issues, and documented them through ticketing.
              </li>
            </div>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={`${styles.content}`}>
            <h2 className="font-bold ">2023 - 2024</h2>
            <h3 className="font-bold text-lg">
              Good Greek Moving and Storage, Software Engineer
            </h3>
            <div className="text-sm flex flex-col gap-2 ">
              <li>
                Full Stack Software Developer in a team that built a CRM from
                scratch, tailored to enhance company workflow.
              </li>
              <li>
                Designed, modeled, and created schemas to improve user
                experience and interface for the CRM.
              </li>
              <li>
                Developed with JavaScript, CSS, and HTML, using React for
                reusable components and state management.
              </li>
              <li>
                Leveraged Next.js for server-side rendering, routing, and
                serverless API endpoints.
              </li>
              <li>
                Utilized MongoDB for scalable backend database management,
                integrating data via API endpoints.
              </li>
              <li>
                Managed the project through GitHub for version control during
                development, deployment, testing, maintenance, and rollback
                phases.
              </li>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Experience;
