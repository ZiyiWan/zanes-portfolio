"use client";
import { useRef } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
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
import Brain from "./Brain";
import { useScroll } from "framer-motion";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillsList = [
    { title: "ReactJS", icon: <RiReactjsFill size={28} /> },
    { title: "NextJS", icon: <TbBrandNextjs size={28} /> },
    { title: "TypeScript", icon: <TbBrandTypescript size={28} /> },
    { title: "Tailwind CSS", icon: <TbBrandTailwind size={28} /> },
    { title: "RESTful API", icon: "" },
    { title: "Axios", icon: <SiAxios size={28} /> },
    { title: "HTML", icon: <TbBrandHtml5 size={28} /> },
    { title: "CSS", icon: <TbBrandCss3 size={28} /> },
    { title: "JavaScript", icon: <TbBrandJavascript size={28} /> },
    { title: "MySQL", icon: <TbBrandMysql size={28} /> },
    { title: "Github", icon: <TbBrandGithub size={28} /> },
  ];
  const positionList = [
    {
      title: "Full Stuck Developer",
      des: "Build a bug fix reminder for my own",
      date: "20/01/2024 - 14/02/2024",
      company: "Independently",
    },
    {
      title: "Web Developer",
      des: " Built a health-focused web applications using Next.js, FHIR and TypeScript, emphasizing user experience and data integration.",
      date: "Jun 2022 - Dec 2023",
      company: "Digital Health, Monash University",
    },
    {
      title: "Independent Web Developer",
      des: "Created a course management system, showcasing skills with Next.js, TypeScript, REST API and responsive design.",
      date: "Mar 2022 - Jun 2022",
      company: "Freelance",
    },
    {
      title: "Web Developer",
      des: "Developed a UV protection site, employing WordPress and external APIs for real-time data.",
      date: "Mar 2021 - Oct 2021",
      company: "Monash University IE Unit",
    },
  ];
  return (
    <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
      {/* Text div */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:w-2/3 xl:w-1/2 lg:pr-0">
        {/* About me div */}
        <div className="flex flex-col gap-12 justify-center">
          {/* About me Title */}
          <h1 className="font-bold text-3xl">About Me</h1>
          {/* About me Description */}
          <p className="text-lg">
            " Hi there! This is Zane, a web developer with a knack for creating
            engaging web experiences. My journey in web development has allowed
            me to dive deep into technologies like React, TypeScript, and
            Next.js, bringing ideas to life across a variety of projects. I'm
            passionate about designing user-centric platforms that are both
            impactful and visually appealing. Collaborating in dynamic teams
            where innovation and creativity flourish is where I shine. Always on
            the lookout for new learning opportunities, I'm excited to connect
            and explore how we can collaborate to craft something truly special!
            "
          </p>
          {/* Motto div */}
          <div className="italic text-gray-400 text-base">
            Quality is never an accident , it is always the result of
            intelligent effort - John Ruskin.
          </div>
        </div>
        {/* SKill div */}
        <div className="flex flex-col gap-12 justify-center">
          {/* Skill Title */}
          <h1 className="font-bold text-3xl">SKILLS</h1>
          {/* Skill list */}
          <div className="flex gap-4 flex-wrap">
            {skillsList.map((item) => (
              <div
                key={item.title}
                className="rounded p-2 text-base cursor-pointer bg-black text-white hover:bg-white hover:text-black flex flex-row items-center justify-between gap-2"
              >
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>
        </div>
        {/* Experience div */}
        <div className="flex flex-col justify-center">
          {/* Experience Title */}
          <h1 className="font-bold text-3xl pb-12">EXPERIENCE</h1>
          {/* Experience list */}
          {positionList.map((position, index) => (
            <PositionDetail
              position={position}
              key={position.des}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
        <div className="py-1" />
      </div>
      {/* SVG idv */}
      <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};
const PositionDetail = ({ position, align }) => {
  const isLeftAligned = align === "left";
  return (
    <div>
      {/* Experience Item */}
      <div className="flex justify-between">
        {/* Left */}
        <div className="w-1/3">
          {isLeftAligned && <PositionComponent position={position} />}
        </div>
        {/* Center */}
        <div className="w-1/6 flex justify-center">
          <div className="w-1 h-full bg-gray-600 rounded relative">
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/3">
          {!isLeftAligned && <PositionComponent position={position} />}
        </div>
      </div>
    </div>
  );
};

const PositionComponent = ({ position }) => {
  return (
    <div className="pb-4">
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {position.title}
      </div>
      {/* Descriprtion */}
      <div className="p-3 text-sm italic">{position.des}</div>
      {/* Date */}
      <div className="p-3 text-red-400 text-sm font-semibold">
        {position.date}
      </div>
      {/* Company */}
      <div className="p-1 rounded bg-white text-sm font-semibold w-auto">
        {position.company}
      </div>
    </div>
  );
};
export default AboutPage;
