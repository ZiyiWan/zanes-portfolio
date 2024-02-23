"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StyledNavBarMenu from "./StyledNavBarMenu";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full items-center flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Navbar Menu div */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <StyledNavBarMenu href={link.url} key={link.url} link={link}>
            {link.title}
          </StyledNavBarMenu>
        ))}
      </div>
      {/*LOGO div */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        {" "}
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center"
        >
          <span className="text-white mr-1 w-12 h-8 flex items-center justify-center">
            Zane
          </span>
          <span className="w-9 h-6 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Social Media icon div */}
      <div className="hidden md:flex flex-row gap-4 w-1/3 justify-end">
        <Link href="https://github.com/ZiyiWan">
          <Image src="/github.png" alt="github icon" width={24} height={24} />
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
      {/*Hamburger div */}
      <div className="md:hidden">
        {" "}
        <button
          className="w-10 h-5 flex-col justify-between flex z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
      </div>
      {/* Navbar list div */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
          {links.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
