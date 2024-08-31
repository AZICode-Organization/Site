"use client";
import React from 'react';
import SwiperCore, { EffectCards, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css';
import Image from 'next/image';

type ProjectSwiperProps = {
  imgUrl: string;
  title: string;
  description: string;
};


const ProjectSwiper = ({ imgUrl, title, description }: ProjectSwiperProps) => {
  return (
    <div className="rounded-3xl p-0 relative group">

      <Swiper
        modules={[EffectCards, Mousewheel]}
        effect="cards"
        grabCursor={true}
        initialSlide={2}
        loop={true}
        mousewheel={{ invert: false }}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className=" relative rounded-3xl bg-contain bg-no-repeat bg-center">
            <Image
              src={imgUrl}
              alt={title}
              layout="responsive"
              width={16}
              height={9}
              className="rounded-lg"
            />
            {/* Mantém a proporção da imagem sem cortar ou replicar  */}
            {/* A imagem dentro da div é invisível, mas ainda assim define o tamanho da div. */}
            {/* Isso ajuda a garantir que a div se ajuste ao conteúdo. */}
            {/* <img src={imgUrl} alt={title} className="invisible w-full h-auto" /> */}

          </div>

          <div>
            <span className="absolute top-0 right-0 text-white mt-2 mr-2 px-5 py-2 rounded-3xl tracking-wider text-sm bg-white bg-opacity-10 shadow-custom-light backdrop-blur-3xl">
              Mobile
            </span>
          </div>

          <div>
            <h5 className="absolute bottom-0 left-0 ml-5 mb-5 text-xl font-semibold text-white ">
              {title}
            </h5>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectSwiper

