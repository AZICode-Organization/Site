"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import ProjectSwiper3 from './ProjectSwiper3'
import ProjectSwiper4 from './ProjectSwiper4'

const projectsData = [
  {
    id: 1,
    title: "Solara Express",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoSolara.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com",
    info: "Esse é um projeto de um site de uma empresa de transporte de cargas. O site foi desenvolvido com HTML, CSS e JavaScript. O site é responsivo e tem uma animação de scroll suave."
  },
  {
    id: 2,
    title: "Sobrenatural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoColorFull.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com",
    info: "Esse é um projeto de um aplicativo de streaming de música. O aplicativo foi desenvolvido com React Native e TypeScript. O aplicativo é responsivo e tem uma animação de scroll suave."
  },
  {
    id: 3,
    title: "O caminho até aqui",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/as.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com",
    info: "Um projeto para novos desenvolvedores que estão começando a carreira. O projeto foi desenvolvido com React e TypeScript. O projeto é responsivo e tem uma animação de scroll suave."
  }
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");


  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="portfolio" className="bg-neutral-950 px-4 md:px-16 pb-12">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Uma pequena seleção de <span className="text-indigo-700">projetos recentes</span>
      </h2>

      <div className="text-white flex flex-wrap justify-center items center gap-2 pb-12 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>


      {/* Somente em dispositivos móveis */}
      <div className="mb-32 block md:hidden">
        <ProjectSwiper3 projects={filteredProjects} />
      </div>

      {/* Somente em dispositivos maiores (tablet e desktop) */}
      <div className=" mb-32 hidden md:flex md:flex-row md:justify-center items-center">
        <ProjectSwiper4 projects={filteredProjects} />
      </div>

     {/* 
      <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
          />
        )}
      </div>
       */}

    </section>
  )
}

export default ProjectSection
