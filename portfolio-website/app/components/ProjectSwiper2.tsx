"use client";
import React from 'react';
import SwiperCore, { EffectCards, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: "Solara Express",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoSolara.png",
    previewUrl: "https://www.google.com"
  },
  {
    id: 2,
    title: "Sobrenatural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoWhite.png",
    previewUrl: "https://www.google.com"
  },
  {
    id: 3,
    title: "O caminho até aqui",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjetoColorFull.png",
    previewUrl: "https://www.google.com"
  },
  {
    id: 4,
    title: "Início de tudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/projeto.png",
    previewUrl: "https://www.google.com"
  },
  {
    id: 5,
    title: "George Carlin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/ProjectMaster.png",
    previewUrl: "https://www.google.com"
  },
  {
    id: 6,
    title: "Expresso Nepomuceno",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque in libero auctor hendrerit.",
    image: "/images/projects/Projeto2colors.png",
    previewUrl: "https://www.google.com"
  }
]

const ProjectSwiper = () => {
  return (
    <Swiper
      modules={[EffectCards, Mousewheel]}
      effect="cards"
      grabCursor={true}
      initialSlide={2}
      loop={true}
      mousewheel={{ invert: false }}
      className="mySwiper"
    >
      {projectsData.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="p-4 bg-white rounded-lg shadow-lg text-center">
            <img src={project.image} alt={project.title} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-2 inline-block">Preview</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
