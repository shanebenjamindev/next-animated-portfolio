"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      className={`rounded p-1 ${path === link.url && "bg-black text-white"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
