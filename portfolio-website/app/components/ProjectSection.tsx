import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/images/projects/ProjetoSolara.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    image: "/images/projects/ProjetoWhite.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    image: "/images/projects/ProjetoColorFull.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição do projeto 4",
    image: "/images/projects/projeto.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição do projeto 5",
    image: "/images/projects/ProjectMaster.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição do projeto 6",
    image: "/images/projects/Projeto2colors.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  }
]


const ProjectSection = () => {
  return (
    <section className="bg-neutral-950 px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">Uma pequena seleção de <span className="text-indigo-700">projetos recentes</span></h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) =>
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
