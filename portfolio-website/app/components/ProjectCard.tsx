import React from 'react'
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/16/solid';

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
};

const ProjectCard = ({ imgUrl, title, description, previewUrl }: ProjectCardProps) => {
  return (
    <div className="rounded-3xl border border-neutral-700 bg-black p-4 relative group        ">

      <div className="h-52 md:h-72 rounded-lg" 
      style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
      </div>

      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000 rounded-3xl ">
        <Link href={previewUrl} className="h-14 w-14 border-2 realtive rounded-full border-gray-400 hover:border-gray-300 group/link">
          <CodeBracketIcon className="text-white h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gray-500" />
        </Link>
      </div>

      <div className="mt-6">
        <h5 className="text-xl font-semibold mb-1 text-white">
          {title}
        </h5>
        <p className="text-gray-300 text-xs">
          {description}
        </p>

      </div>
    </div>
  )
}

export default ProjectCard
