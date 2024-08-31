import React from 'react'

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({name, onClick, isSelected}) => {
  const buttonStyle = isSelected ? "bg-indigo-700 text-white" : "bg-white text-indigo-700"
  return (
    <button className={`${buttonStyle} rounded-xl px-3 py-1 cursor-pointer`} onClick={() => onClick(name)} >
      {name}
    </button>

  )
}

export default ProjectTag
