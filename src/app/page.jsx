"use client";
import Image from "next/image";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuCode2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { GrDownload } from "react-icons/gr";
import { PiPaperPlaneTilt } from "react-icons/pi";

const servicesList = [
  {
    icon: <MdOutlineDesignServices size={75} />,
    title: "Web Design",
    des: "Creating visually captivating, elegant, and responsive websites that ensure a seamless and engaging user experience across all devices.",
  },
  {
    icon: <LuCode2 size={75} />,
    title: "Web Development",
    des: "Developing dynamic, efficient, and secure web solutions tailored to meet your business needs, leveraging cutting-edge technologies for optimal performance.",
  },
];

const projectsList = [
  {
    src: "/issue.png",
    title: "Issue tracker",
    des: "This a issue tracker website for creating, tracking, assignning issues.",
  },
  {
    src: "/shopify.png",
    title: "Love's Adventure",
    des: "This is an e-commerce website for selling audlt product",
  },
];

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-16 overflow-scroll">
      {/* banner div */}
      <div className="flex flex-col lg:flex-row relative justify-between gap-24">
        {/* Image div */}
        <div className="h-min relative lg:h-full lg:w-1/2 items-center flex justify-center">
          <Image
            src="/hero.png"
            alt="hero img"
            width={700}
            height={700}
            className="object-contain pr-15 pt-20"
            priority
          />
        </div>
        {/* Text div */}
        <div className="h-1/2 relative flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          <h1 className="text-4xl font-bold md:text-5xl">
            <span style={{ color: "#ffadad" }}>A</span>
            <span style={{ color: "#ffd6a5" }}>L</span>
            <span style={{ color: "#fdffb6" }}>O</span>
            <span style={{ color: "#caffbf" }}>H</span>
            <span style={{ color: "#9bf6ff" }}>A</span>
            <span style={{ color: "#a0c4ff" }}>!</span> Welcome to my zone
          </h1>

          <p className="md:text-xl">
            Welcome to my digital space, where creativity and technology blend
            to create unique web experiences. Specializing in user-friendly and
            responsive website design and development, I invite you to explore
            my portfolio and discover how we can transform your digital ideas
            into reality.
          </p>

          <div className="flex gap-4 w-full">
            <a
              href="/ZiyiWan_position_0422900812.pdf"
              className="bg-orange-400 rounded-full font-semibold text-white p-4 w-42 shadow-lg hover:bg-orange-500 flex items-center gap-2 px-6"
            >
              Download CV
              <GrDownload size={18} className="relative -top-0.5" />
            </a>
            <button
              className="p-4 px-6 rounded-full hover:bg-red-100 bg-red-50 shadow-lg flex items-center gap-2"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Me
              <PiPaperPlaneTilt size={20} className="relative -top-0.5" />
            </button>
          </div>
        </div>
      </div>
      {/* My service div */}
      <div className="flex flex-col justify-between items-center relative">
        {/* Heading div */}
        <h1 className="font-bold text-3xl pb-12 flex flex-row gap-1 justify-center items-center">
          <div className="relative w-3.5 h-3.5 rounded-full ring-2 ring-black bg-white-300 shadow-black shadow-xl z-40" />
          <div className="relative w-4 h-4 rounded-full bg-orange-400 -left-6 top-0.5" />
          My Services
        </h1>
        {/* Service List */}
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-between p-8">
          {servicesList.map((service, index) => (
            <ServiceCard service={service} key={service.title || index} />
          ))}
        </div>
      </div>
      {/* Latest Project div */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-8 relative lg:gap-72 gap-5 pb-36">
        {/* Heading div */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="font-bold text-2xl flex flex-row gap-1 justify-center items-center">
            <div className="relative w-3.5 h-3.5 rounded-full ring-2 ring-black bg-white-300 shadow-black shadow-xl z-40" />
            <div className="relative w-4 h-4 rounded-full bg-orange-400 -left-6 top-0.5" />
            Latest Projects
          </h1>
          {/* Des */}
          <div className="text-lg text-gray-500 italic w-96">
            Here shows some screenshots and short description of my latest
            projects.
          </div>
          {/* Button to projects */}
          <button
            className="bg-orange-400 rounded-full font-semibold text-white p-4 w-48 shadow-xl hover:bg-orange-500 px-6"
            onClick={() => {
              router.push("/portfolio");
            }}
          >
            All Projects →
          </button>
        </div>
        {/* Projects div */}
        <div className="w-[520px] flex justify-center items-center">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {projectsList.map((project, index) => (
              <SwiperSlide key={project.title || index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center w-2/3 rounded-xl bg-orange-100 lg:w-[32rem] xl:w-[40rem] gap-3 lg:h-[300px] shadow-2xl shadow-orange-100 hover:shadow-orange-200">
      {/* icon */}
      <div className="text-orange-400 relative pl-4 sm:p-0">{service.icon}</div>
      {/* Title */}
      <h1 className="sm:font-semibold text-xl font-normal sm:w-fit w-96">
        {service.title}
      </h1>
      {/* Des */}
      <div className="w-4/5 text-xl font-thin text-start pb-5 hidden sm:block">
        {service.des}
      </div>
    </div>
  );
};
const ProjectCard = ({ project }) => {
  if (!project) return null; // or render a default content or message

  return (
    <div className="flex flex-col gap-1 justify-center items-center pb-10 p-5">
      {/* img div */}
      <div className="items-center px-16 py-8 rounded-xl bg-orange-300 shadow-xl shadow-orange-200">
        <Image
          src={project?.src} // Use optional chaining here
          alt={project?.title || "default title"} // Default title if project.title is undefined
          width={250}
          height={200}
          className="object-contain shadow-xl"
        />
        <div className="w-[250px] rounded-md py-2">
          {/* title div */}
          <div className="sm:font-semibold text-xl font-normal sm:w-fit w-96 text-white">
            {project?.title}
          </div>
          {/* des div */}
          <div className="text-base text-white italic pt-1">{project?.des}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
