import Image from "next/image";
import { Project } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
      <Image 
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="rounded-xl w-full object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">{project.description}</p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside">
            {project.tech.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div className="flex gap-4 mt-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl">
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
