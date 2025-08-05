"use client";
import Slider from "react-slick";
import ProjectCard from "./Projects";
import { Project } from "@/types";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
