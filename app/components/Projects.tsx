import React from "react";
import { Meteors } from "./ui/meteors";
import {
  SiAmazonwebservices,
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import userData from "@/constants/data";
import { LinkPreview } from "./ui/link-preview";
import { motion, useInView } from "framer-motion";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  imgUrl: string;
  link: string;
};

const techIcons = {
  Typescript: SiTypescript,
  React: FaReact,
  "Next.js": RiNextjsFill,
  Tailwind: SiTailwindcss,
  Jest: SiJest,
  Cypress: SiCypress,
  MongoDB: SiMongodb,
  Node: FaNodeJs,
  Aws: SiAmazonwebservices,
  Express: SiExpress,
  OpenAI: SiOpenai,
};

export default function Projects() {
  return (
    <section className="w-full pb-10 h-full">
      <h3 className="text-4xl sm:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-100 py-8">
        My Work
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {userData.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full relative max-w-sm"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <h2 className="font-bold text-xl text-white mb-4 relative z-50">
          {project.title}
        </h2>
        <div className="font-normal text-base text-slate-500 mb-4 relative z-50 flex-grow h-40">
          {project.description}
        </div>
        <div className="flex flex-wrap gap-2 py-4 justify-center w-full">
          {project.technologies.map((tech, techIndex) => {
            const IconComponent = techIcons[tech as keyof typeof techIcons];
            return (
              IconComponent && (
                <IconComponent
                  key={techIndex}
                  title={tech}
                  className="text-3xl text-gray-400 hover:text-white transition-colors"
                />
              )
            );
          })}
        </div>
        <div className="flex items-center justify-center w-full z-50">
          <LinkPreview url={project.link} className="z-50">
            <Link href={project.link} target="_blank">
              <Image
                src={project.imgUrl}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-sm object-contain"
              />
            </Link>
          </LinkPreview>
        </div>
        <Meteors number={20} />
      </div>
    </motion.div>
  );
}
