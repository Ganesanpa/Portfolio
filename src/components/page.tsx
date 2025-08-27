// // app/projects/[id]/page.tsx
// import Link from 'next/link';
// import { notFound } from "next/navigation";
// import { projects } from "@/data/projects";
// import ProjectDetail from "@/app/projects/[id]/page";

// <Link href="/#projects">
//   <button className="text-sm text-blue-600 hover:underline mb-4">
//     ← Back to Projects
//   </button>
// </Link>
// export async function generateStaticParams() {
//   return projects.map((project) => ({ id: project.id }));
// }
// export default function ProjectPage({ params }: { params: { id: string } }) {
//   const project = projects.find((p) => p.id === params.id);
//   if (!project) return notFound();
//   return (
//      <div className="p-4">
//       {/* Back to Projects */}
//       <Link href="/#projects">
//         <button className="text-sm text-blue-600 hover:underline mb-4">
//           ← Back to Projects
//         </button>
//       </Link>
//   <ProjectDetail project={project} />
//    </div> 
// );
// }


