import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import AboutMe from "./portfolio/AboutMe";
import Experience from "./portfolio/Experience";
import Education from "./portfolio/Education";
import Projects from "./portfolio/Projects";
import Skills from "./portfolio/Skills";
import ContactMe from "./portfolio/ContactMe";
import Footer from "./portfolio/Footer";
import Hero from "./portfolio/Hero";

export default function Page() {
  return (
    <main className="flex flex-col bg-white">
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
}
