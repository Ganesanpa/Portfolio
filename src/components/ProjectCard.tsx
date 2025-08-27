import Image from "next/image";
import { Project } from "@/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition w-full max-w-lg mx-auto">
      {project.image && (
        <Link href={`/projects/${project.id}`}>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover cursor-pointer"
          />
        </Link>
      )}

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Link href={`/projects/${project.id}`} className="hover:underline">
          <h2 className="text-xl sm:text-2xl font-semibold cursor-pointer">
            {project.title}
          </h2>
        </Link>

        <p className="text-sm sm:text-base mt-2">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

       
      </div>
    </div>
  );
}
