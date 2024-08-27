import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/images/projects/ProjetoSolara.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    image: "/images/projects/ProjetoWhite.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    image: "/images/projects/ProjetoColorFull.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição do projeto 4",
    image: "/images/projects/projeto.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição do projeto 5",
    image: "/images/projects/ProjetoMaster.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição do projeto 6",
    image: "/images/projects/Projeto2colors.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição do projeto 6",
    image: "/images/projects/Projeto2colors.png",
    tag: ["All", "Web"],
  },
]


const ProjectSection = () => {
  return (
    <div>
      <h2>Uma pequena seleção de <span className="text-indigo-900">projetos recentes</span></h2>
      <div>
        {projectsData.map((project) =>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectSection
