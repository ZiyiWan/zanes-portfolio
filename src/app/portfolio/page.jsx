"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles

const projects = [
  {
    title: "Issue Tracker",
    description: "This is a brief description of Project 2.",
    imageUrl: "/issue.png",
    img2: "/cropped_issue2.png",
    img3: "/cropped_issue3.png",
  },
  {
    title: "Love's Adventure",
    description: "This is a brief description of Project 1.",
    imageUrl: "/cropped_shopify1.png",
    img2: "/cropped_shopify2.png",
    img3: "/cropped_shopify3.png",
  },
  {
    title: "Virtual Trial",
    description: "This is a brief description of Project 2.",
    imageUrl: "/cropped_vt1.png",
    img2: "/cropped_vt2.png",
    img3: "/cropped_vt3.png",
  },
  {
    title: "My Prescribe",
    description: "This is a brief description of Project 2.",
    imageUrl: "/cropped_prescribe1.png",
    img2: "/cropped_prescribe2.png",
    img3: "/cropped_prescribe3.png",
  },
  {
    title: "3hield UV",
    description: "This is a brief description of Project 2.",
    imageUrl: "/cropped_uv1.png",
    img2: "/cropped_uv2.png",
    img3: "/cropped_uv3.png",
  },
];

const ProjectsPage = () => {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-12 xl:px-8 overflow-scroll justify-center items-center">
      <h1 className="font-bold text-3xl pb-12 flex flex-row gap-1 justify-center items-center">
        <div className="relative w-3.5 h-3.5 rounded-full ring-2 ring-black bg-white-300 shadow-black shadow-xl z-40" />
        <div className="relative w-4 h-4 rounded-full bg-orange-400 -left-6 top-0.5" />
        My Projects
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-4/5 h-4/5 shadow-2xl rounded-2xl" // This sets the swiper to 60% width and 40% height of the screen
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-full">
              {/* Card filling the SwiperSlide */}
              <div className="md:w-3/5 w-full h-full relative bg-pj-bg bg-cover flex justify-center items-center">
                {" "}
                <div className="absolute px-24 p-12 flex flex-col gap-4">
                  {/* big img */}
                  <div className="h-3/5 w-full relative">
                    {" "}
                    {/* Container controls the height */}
                    <div className="mx-auto relative">
                      {" "}
                      <Image
                        src={project.imageUrl}
                        alt="Project image"
                        layout="responsive"
                        width={1000}
                        height={1200}
                        className="shadow-slate-400 shadow-md rounded-lg"
                      />
                    </div>
                  </div>
                  {/* small img */}
                  <div className="h-2/5 flex flex-row justify-between gap-4">
                    {/* left */}
                    <div>
                      <Image
                        src={project.img2}
                        alt="Additional content"
                        width={380}
                        height={350}
                        objectFit="cover"
                        className="shadow-slate-400 shadow-xl rounded-lg"
                      />
                    </div>
                    {/* right */}
                    <div>
                      <Image
                        src={project.img3}
                        alt="Additional content"
                        width={380}
                        height={350}
                        objectFit="cover"
                        className="shadow-slate-400 shadow-xl rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col md:w-2/5">
                <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-700 text-lg">{project.description}</p>
                <div>Tech Stuck</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsPage;
