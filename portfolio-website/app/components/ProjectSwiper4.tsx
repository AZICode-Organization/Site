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
    <div className=" md:grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-[#4b4d4d] mb-4 max-w-md">
          {projects[activeIndex].info}
        </p>
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

