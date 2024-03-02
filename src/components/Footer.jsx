"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 xl:max-w-[100rem]">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="flex flex-col mb-4 lg:mb-0 gap-3">
            <Link
              href="/"
              className="text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center lg:justify-start w-24"
            >
              <span className="text-white mr-2 w-12 h-8 flex items-center justify-center">
                Zane
              </span>
              <span className="w-9 h-6 rounded bg-white text-black flex items-center justify-center">
                .dev
              </span>
            </Link>
            <p className="mt-2">Creating solutions for today's challenges.</p>
            <div className="flex gap-5">
              <Link href="https://github.com/ZiyiWan">
                <Image
                  src="/github.png"
                  alt="github icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/zane-wan-6575b8221/">
                <Image
                  src="/linkedin.png"
                  alt="linkedin icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-4 px-4">
              Contact With Me
              <div className="flex items-center gap-2">
                <Image src="/qq.png" alt="qq icon" width={24} height={24} />
                <span>576384038</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Email_icon.png"
                  alt="email icon"
                  width={24}
                  height={24}
                />
                <span>zwan0238@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src="/wechat.png"
                  alt="wechat icon"
                  width={26}
                  height={26}
                />
                <Image
                  src="/QR.png"
                  alt="qr icon"
                  width={100}
                  height={100}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <div className="border-l border-gray-700 pt-4 flex justify-center items-center">
            <p className="px-5">© 2024 Zane's Dev. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
