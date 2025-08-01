
import Image from "next/image";
import { Project } from "@/types";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <section id="projects">
   <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition w-full max-w-lg mx-auto">
  {project.image && (
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />
  )}
  <div className="px-4 sm:px-6 lg:px-8 py-6">
    <h2 className="text-xl sm:text-2xl font-semibold">{project.title}</h2>
    <p className="text-sm sm:text-base mt-2">{project.description}</p>
  </div>
</div>
</section>
  );
}
