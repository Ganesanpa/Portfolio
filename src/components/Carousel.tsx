
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  items: React.ReactNode[];
  slidesPerView?: number;
  className?: string;
}

export default function Carousel({
  items,
  slidesPerView = 3,
  className = "",
}: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      className={className}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
