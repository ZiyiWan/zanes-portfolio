import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const StyledNavBarMenu = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded p-2 ${
        pathName === link.url && "bg-orange-400 text-white"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default StyledNavBarMenu;
