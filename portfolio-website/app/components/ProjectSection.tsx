import React from 'react'
import ProjectCard from './ProjectCard'

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
    image: "/images/projects/ProjetoWhite.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 3,
    title: "O caminho até aqui",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoColorFull.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.google.com"
  },
  {
    id: 4,
    title: "Início de tudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/projeto.png",
    tag: ["All", "Web"],
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
  return (
    <section className="bg-neutral-950 px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Uma pequena seleção de <span className="text-indigo-700">projetos recentes</span>
      </h2>

      <div className="text-white flex flex-row justify-center items center gap-2 pb-12">
        <button className="rounded-xl bg-indigo-700  px-3 py-1">Todos</button>
        <button className="rounded-xl bg-white text-black px-3 py-1 hover:bg-indigo-700 hover:text-white">Chat Bots</button>
        <button className="rounded-xl bg-white text-black px-3 py-1 hover:bg-indigo-700 hover:text-white">Softwares</button>
        <button className="rounded-xl bg-white text-black px-3 py-1 hover:bg-indigo-700 hover:text-white">Web Sites</button>
        <button className="rounded-xl bg-white text-black px-3 py-1 hover:bg-indigo-700 hover:text-white">UI/UX</button>
        <button className="rounded-xl bg-white text-black px-3 py-1 hover:bg-indigo-700 hover:text-white">SEO</button>
      </div>

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
