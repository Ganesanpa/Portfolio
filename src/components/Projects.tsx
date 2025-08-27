"use client";
import { Project } from "@/types";
import Link from "next/link";
type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow">
            <img src={project.image} alt={project.title} className="rounded mb-3" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs bg-gray-200 rounded">
                  {t}
                </span>
              ))}
            </div>
         


          </div>
        ))}
      </div>
    </section>
  );
}
