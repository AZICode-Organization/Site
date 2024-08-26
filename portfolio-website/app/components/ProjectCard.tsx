import React from 'react'

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
};

const ProjectCard = ({ imgUrl, title, description }: ProjectCardProps) => {
  return (
    <div>

      <div className="h-52 md:h-72" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
      </div>

      <div className="text-black">
        <h5>
          {title}
        </h5>
        <p>
          {description}
        </p>

      </div>
    </div>
  )
}

export default ProjectCard
