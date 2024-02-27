import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
      {/* Image div */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="hero img" fill className="object-contain" />
      </div>
      {/* Text div */}
      <div className="h-1/2 relative flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-4xl font-bold md:text-6xl">
          Hello, welcome to my zone
        </h1>
        <p className="md:text-xl">
          Welcome to my dalj asd, apsojd sajd jdpaoxmn ejenf, oajsid alks
          jdioasjd lasjk asdncm.Wskdja jdk lkjajsd ijasd, qmamd asidj ja
          kjalsdkj, aljiwei ajkd jiwj mc. Odkadk lajs jlkjda lka! Wskdja jdk
          lkjajsd ijasd, qmamd asidj ja kjalsdkj, aljiwei ajkd jiwj mc. Odkadk
          lajs jlkjda lka!
        </p>
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            My Resume
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
