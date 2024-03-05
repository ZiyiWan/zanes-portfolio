"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiReactjsFill } from "react-icons/ri";
import { SiAxios, SiShopify, SiWordpress } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandGithub,
  TbBrandMysql,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
} from "react-icons/tb";

const projects = [
  {
    title: "Virtual Trial",
    description:
      "A digital health solution enabling patients to participate in clinical trials remotely. The platform ensures secure data handling and seamless communication between patients and researchers for efficient trial management.",
    imageUrl: "/cropped_vt1.png",
    img2: "/cropped_vt2.png",
    img3: "/cropped_vt3.png",
    techStuck: [
      { title: "ReactJS", icon: <RiReactjsFill size={28} /> },
      { title: "NextJS", icon: <TbBrandNextjs size={28} /> },
      { title: "TypeScript", icon: <TbBrandTypescript size={28} /> },
      { title: "MySQL", icon: <TbBrandMysql size={28} /> },
      { title: "RESTful API", icon: "" },
      { title: "Axios", icon: <SiAxios size={28} /> },
      { title: "Github", icon: <TbBrandGithub size={28} /> },
    ],
  },
  {
    title: "Issue Tracker",
    description:
      "A comprehensive issue tracking system designed to streamline the process of reporting and resolving issues. Features include real-time updates, categorization, and status tracking to ensure efficient management of the project lifecycle.",
    imageUrl: "/issue.png",
    img2: "/cropped_issue2.png",
    img3: "/cropped_issue3.png",
    techStuck: [
      { title: "ReactJS", icon: <RiReactjsFill size={28} /> },
      { title: "NextJS", icon: <TbBrandNextjs size={28} /> },
      { title: "TypeScript", icon: <TbBrandTypescript size={28} /> },
      { title: "Tailwind CSS", icon: <TbBrandTailwind size={28} /> },
      { title: "RESTful API", icon: "" },
      { title: "MySQL", icon: <TbBrandMysql size={28} /> },
      { title: "Github", icon: <TbBrandGithub size={28} /> },
    ],
  },
  {
    title: "Love's Adventure",
    description:
      "An adult e-commerce platform offering a curated selection of products to enhance romantic experiences. The site provides intuitive navigation, detailed product descriptions, and a secure checkout process.",
    imageUrl: "/cropped_shopify1.png",
    img2: "/cropped_shopify2.png",
    img3: "/cropped_shopify3.png",
    techStuck: [
      { title: "Shopify", icon: <SiShopify size={28} /> },
      { title: "HTML", icon: <TbBrandHtml5 size={28} /> },
      { title: "CSS", icon: <TbBrandCss3 size={28} /> },
      { title: "JavaScript", icon: <TbBrandJavascript size={28} /> },
    ],
  },

  {
    title: "My Prescribe",
    description:
      "A medical prescription management app that simplifies the process of prescribing and tracking medications. It includes features for electronic prescriptions, dosage tracking, and patient history records.",
    imageUrl: "/cropped_prescribe1.png",
    img2: "/cropped_prescribe2.png",
    img3: "/cropped_prescribe3.png",
    techStuck: [
      { title: "ReactJS", icon: <RiReactjsFill size={28} /> },
      { title: "NextJS", icon: <TbBrandNextjs size={28} /> },
      { title: "TypeScript", icon: <TbBrandTypescript size={28} /> },
      { title: "RESTful API", icon: "" },
      { title: "Axios", icon: <SiAxios size={28} /> },
      { title: "Github", icon: <TbBrandGithub size={28} /> },
    ],
  },
  {
    title: "3hield UV",
    description:
      "A real-time UV index monitoring application that provides personalized sun protection recommendations. The app offers UV index forecasts, sun safety tips, and product suggestions to protect skin from harmful UV exposure.",
    imageUrl: "/cropped_uv1.png",
    img2: "/cropped_uv2.png",
    img3: "/cropped_uv3.png",
    techStuck: [
      { title: "WordPress", icon: <SiWordpress size={28} /> },
      { title: "HTML", icon: <TbBrandHtml5 size={28} /> },
      { title: "CSS", icon: <TbBrandCss3 size={28} /> },
      { title: "JavaScript", icon: <TbBrandJavascript size={28} /> },
      { title: "RESTful API", icon: "" },
      { title: "Github", icon: <TbBrandGithub size={28} /> },
    ],
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
        className="w-4/5 h-4/5 shadow-2xl rounded-2xl" // This sets the swiper to 60% width and 40% height of the screen
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-full gap-2">
              {/* Card filling the SwiperSlide */}
              <div className="md:w-3/5 w-full h-full relative bg-pj-bg bg-cover flex justify-center items-center">
                {" "}
                <div className="absolute px-[15%] flex flex-col gap-4">
                  {/* big img */}
                  <div className="h-3/5 w-full relative">
                    {" "}
                    {/* Container controls the height */}
                    <div className="mx-auto relative">
                      {" "}
                      <Image
                        src={project.imageUrl}
                        alt="Project image"
                        responsive="true"
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
                        width={450}
                        height={350}
                        cover="true"
                        className="shadow-slate-400 shadow-xl rounded-lg"
                      />
                    </div>
                    {/* right */}
                    <div>
                      <Image
                        src={project.img3}
                        alt="Additional content"
                        width={450}
                        height={350}
                        cover="true"
                        className="shadow-slate-400 shadow-xl rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col md:w-2/5 gap-6 justify-center">
                <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-700 text-lg">{project.description}</p>
                <h4 className="font-semibold text-xl mt-2 italic">
                  Tech Stuck
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {project.techStuck.map((item) => (
                    <div
                      key={item.title}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black flex flex-row items-center justify-between gap-2"
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsPage;
