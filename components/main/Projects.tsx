import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col item-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from purple-500 to cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint sit deserunt explicabo quo aliquam a ducimus, facilis ullam sequi!"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint sit deserunt explicabo quo aliquam a ducimus, facilis ullam sequi!"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed website"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint sit deserunt explicabo quo aliquam a ducimus, facilis ullam sequi!"
        />
      </div>
    </div>
  );
};

export default Projects;
