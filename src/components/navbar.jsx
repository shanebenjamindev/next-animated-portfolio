"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Portfolio", url: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="navbar h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-hidden">
      <div className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>

      {/* Logo */}
      <div>
        <Link
          href="#"
          className="font-semibold text-sm bg-black rounded-md p-1 flex items-center text-white"
        >
          <span className="mr-1">Giang</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center">
            .dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <Link href="#">
          <img src="/github.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <img src="/facebook.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <img src="/instagram.png" width={24} height={24} alt="" />
        </Link>
      </div>

      {/* Menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu list */}
        {open && (
          <motion.ul
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl"
          >
            {links.map((link, index) => (
              <motion.li variants={listItemVariant} key={index}>
                <Link href={link.url}>{link.title}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
