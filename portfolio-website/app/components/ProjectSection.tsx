"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import ProjectSwiper from './ProjectSwiper'
import ProjectSwiper2 from './ProjectSwiper2'
import ProjectSwiper3 from './ProjectSwiper3'

const projectsData = [
  {
    id: 1,
    title: "Solara Express",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoSolara.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 2,
    title: "Sobrenatural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoColorFull.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 3,
    title: "O caminho até aqui",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/as.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 4,
    title: "Início de tudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/projeto.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 5,
    title: "George Carlin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjectMaster.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 6,
    title: "Expresso Nepomuceno",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/Projeto2colors.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
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
    <section className="bg-neutral-950 px-4 md:px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Uma pequena seleção de <span className="text-indigo-700">projetos recentes</span>
      </h2>

      <div className="text-white flex flex-wrap justify-center items center gap-2 pb-12">
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


    
      <div className="md:hidden mb-32">
        <ProjectSwiper3 projects={filteredProjects} />
      </div>


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
    </section>
  )
}

export default ProjectSection
