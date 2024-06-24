"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

const Carousel = ({
  images,
  alt,
  height,
  width,
}: {
  images: string[];
  alt: string;
  height: number;
  width: number;
}) => {
  return (
    <div className="relative w-[inherit] max-w-[600px]">
      <i className="swiper-button image-swiper-button-next border border-secondary p-1 mr-2 w-3 h-3" />
      <i className="swiper-button image-swiper-button-prev border border-secondary p-1 ml-2 w-3 h-3" />
      <Swiper
        className="w-full mb-4 border border-gray-300  rounded-lg"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={true}
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="swiper-slide">
            <Image alt={alt} height={height} src={image} width={width} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
