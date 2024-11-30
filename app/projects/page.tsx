import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="hero_banner relative overflow-hidden h-[300px] bg-blue-500">
        <Image
          src="/gallerybanne.png"
          alt="Event Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <span className="text-sm md:text-lg">
              Home {">"} {">"} projects
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 lg:px-44 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Duration: {project.duration}
                  </span>
                </div>
                <Button className=" w-full mt-5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
