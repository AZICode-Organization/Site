"use client";
import React, { useState } from 'react';
import SwiperCore, { EffectCards, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css';
import Image from 'next/image';

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string[];
  info: string;
  previewUrl: string;
};


type ProjectSwiperProps = {
  projects: Project[];
};


const ProjectSwiper = ({ projects }: ProjectSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className=" md:flex md:flex-row md:justify-center md:items-center md:gap-12 md:bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(255,255,255,0)] md:backdrop-blur-xl md:rounded-3xl md:w-full md:max-w-[1000px] md:shadow-[inset_0_0.5px_0_1px_rgba(255,255,255,0.23),inset_0_1px_0_0_rgba(255,255,255,0.66),0_4px_16px_rgba(0,0,0,0.12)] p-9">
      <div className="flex flex-col justify-center items-center text-justify w-full max-w-[500px]">
        <p className="text-white font-medium text-base mb-5">
          {projects[activeIndex].info}
        </p>
        <button className="block px-10 py-2 mt-4 mx-auto font-bold text-indigo-900 bg-white bg-opacity-90 rounded-md shadow-lg border border-white border-opacity-30 hover:animate-bounce-in transition-all duration-500">
          Falar com especialista
        </button>
        <button className="block px-10 py-2 mt-4 mx-auto font-bold text-white bg-indigo-900 bg-opacity-90 rounded-md shadow-lg hover:animate-bounce-in transition-all duration-500">
          Falar com especialista
        </button>
      </div>

      <Swiper
        modules={[EffectCards, Mousewheel]}
        effect="cards"
        grabCursor={true}
        initialSlide={2}
        loop={true}
        mousewheel={{ invert: false }}
        className="mySwiper w-[250px] h-[450px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="relative rounded-3xl overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-teal-600/0 to-teal-900/0 z-10" />
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>


            <span className="absolute top-0 right-0 text-white mt-2 mr-2 px-5 py-2 rounded-3xl tracking-wider text-sm bg-white bg-opacity-10 shadow-custom-light backdrop-blur-3xl z-20">
              {project.tag[1]}
            </span>

            <h5 className="absolute bottom-0 left-0 ml-5 mb-5 text-xl font-semibold text-white z-20">
              {project.title}
            </h5>



          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectSwiper

